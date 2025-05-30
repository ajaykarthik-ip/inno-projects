// src/services/projectsService.ts
import { query } from '@/lib/db';

/**
 * ProjectsService - Centralized service for all project operations
 * 
 * This single file handles all CRUD operations for projects.
 * No need for separate API routes or controllers.
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  price: string;
  youtube_url: string | null;
  category: string;
  programming_language: string;
  created_at: string;
}

export interface ProjectInput {
  name: string;
  description: string;
  price: string;
  youtubeUrl?: string | null;
  category: string;
  programmingLanguage: string;
}

/**
 * Get all projects with optional filtering
 */
export async function getAllProjects({
  category = null,
  programmingLanguage = null,
  search = null
}: {
  category?: string | null;
  programmingLanguage?: string | null;
  search?: string | null;
} = {}): Promise<Project[]> {
  try {
    let sql = 'SELECT * FROM projects';
    const params: (string | number)[] = [];
    let paramIndex = 1;
    let whereAdded = false;
    
    // Add filters if provided
    if (category && category !== 'all') {
      sql += ' WHERE category = $' + paramIndex++;
      params.push(category);
      whereAdded = true;
    }
    
    if (programmingLanguage && programmingLanguage !== 'all') {
      sql += whereAdded ? ' AND' : ' WHERE';
      sql += ' programming_language = $' + paramIndex++;
      params.push(programmingLanguage);
      whereAdded = true;
    }
    
    if (search) {
      sql += whereAdded ? ' AND' : ' WHERE';
      sql += ' (name ILIKE $' + paramIndex + ' OR description ILIKE $' + paramIndex + ')';
      params.push(`%${search}%`);
    }
    
    // Sort by creation date (newest first)
    sql += ' ORDER BY created_at DESC';
    
    const result = await query(sql, params);
    return result.rows;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
}

/**
 * Get a single project by ID
 */
export async function getProjectById(id: string): Promise<Project> {
  try {
    // Validate ID
    if (!id || isNaN(Number(id))) {
      throw new Error('Invalid project ID');
    }
    
    const result = await query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rowCount === 0) {
      throw new Error('Project not found');
    }
    
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

/**
 * Create a new project
 */
export async function createProject(projectData: ProjectInput): Promise<Project> {
  try {
    // Validate required fields
    const requiredFields = ['name', 'description', 'price', 'category', 'programmingLanguage'];
    for (const field of requiredFields) {
      if (!projectData[field as keyof ProjectInput]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    // Insert new project
    const result = await query(
      `INSERT INTO projects 
      (name, description, price, youtube_url, category, programming_language) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *`,
      [
        projectData.name, 
        projectData.description,
        projectData.price,
        projectData.youtubeUrl || '', // Changed null to empty string to match string | number type
        projectData.category,
        projectData.programmingLanguage
      ]
    );
    
    return result.rows[0];
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

/**
 * Update an existing project
 */
export async function updateProject(id: string, projectData: Partial<ProjectInput>): Promise<Project> {
  try {
    // Validate ID
    if (!id || isNaN(Number(id))) {
      throw new Error('Invalid project ID');
    }
    
    // Check if project exists
    const checkResult = await query('SELECT id FROM projects WHERE id = $1', [id]);
    
    if (checkResult.rowCount === 0) {
      throw new Error('Project not found');
    }
    
    // Build dynamic update query
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;
    
    // Only update fields that are provided
    if (projectData.name !== undefined) {
      updates.push(`name = $${paramIndex++}`);
      values.push(projectData.name);
    }
    
    if (projectData.description !== undefined) {
      updates.push(`description = $${paramIndex++}`);
      values.push(projectData.description);
    }
    
    if (projectData.price !== undefined) {
      updates.push(`price = $${paramIndex++}`);
      values.push(projectData.price);
    }
    
    if (projectData.youtubeUrl !== undefined) {
      updates.push(`youtube_url = $${paramIndex++}`);
      values.push(projectData.youtubeUrl);
    }
    
    if (projectData.category !== undefined) {
      updates.push(`category = $${paramIndex++}`);
      values.push(projectData.category);
    }
    
    if (projectData.programmingLanguage !== undefined) {
      updates.push(`programming_language = $${paramIndex++}`);
      values.push(projectData.programmingLanguage);
    }
    
    // If no fields to update, return the existing project
    if (updates.length === 0) {
      throw new Error('No fields to update');
    }
    
    // Add ID as the last parameter
    values.push(id);
    
    // Execute update query
    const result = await query(
      `UPDATE projects SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );
    
    return result.rows[0];
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
}

/**
 * Delete a project
 */
export async function deleteProject(id: string): Promise<void> {
  try {
    // Validate ID
    if (!id || isNaN(Number(id))) {
      throw new Error('Invalid project ID');
    }
    
    // Check if project exists
    const checkResult = await query('SELECT id FROM projects WHERE id = $1', [id]);
    
    if (checkResult.rowCount === 0) {
      throw new Error('Project not found');
    }
    
    // Delete the project
    await query('DELETE FROM projects WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}