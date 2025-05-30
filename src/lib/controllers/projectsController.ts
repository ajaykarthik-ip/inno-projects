// src/lib/controllers/projectsController.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

/**
 * Project Controller - Handles all CRUD operations for projects
 * 
 * This file consolidates all project-related database operations in one place
 * for improved maintainability and organization.
 */

/**
 * Get all projects with optional filtering
 * 
 * @param request - NextRequest with optional query parameters
 * @returns JSON response with array of projects
 */
export async function getAllProjects(request: NextRequest) {
  try {
    // Extract filter parameters from URL
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const programmingLanguage = url.searchParams.get('programmingLanguage');
    const search = url.searchParams.get('search');
    
    // Build query with dynamic filters
    let sql = 'SELECT * FROM projects';
    const params: (string | number)[] = [];
    let paramIndex = 1;
    let whereAdded = false;
    
    // Add category filter if provided
    if (category && category !== 'all') {
      sql += ' WHERE category = $' + paramIndex++;
      params.push(category);
      whereAdded = true;
    }
    
    // Add programming language filter if provided
    if (programmingLanguage && programmingLanguage !== 'all') {
      sql += whereAdded ? ' AND' : ' WHERE';
      sql += ' programming_language = $' + paramIndex++;
      params.push(programmingLanguage);
      whereAdded = true;
    }
    
    // Add search filter if provided (searches in name and description)
    if (search) {
      sql += whereAdded ? ' AND' : ' WHERE';
      sql += ' (name ILIKE $' + paramIndex + ' OR description ILIKE $' + paramIndex + ')';
      params.push(`%${search}%`);
    }
    
    // Sort by creation date (newest first)
    sql += ' ORDER BY created_at DESC';
    
    const result = await query(sql, params);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

/**
 * Get a single project by ID
 * 
 * @param id - Project ID
 * @returns JSON response with project data or error
 */
export async function getProjectById(id: string) {
  try {
    // Validate ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }
    
    // Fetch the project
    const result = await query(
      'SELECT * FROM projects WHERE id = $1',
      [id]
    );
    
    // Check if any row was found
    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

/**
 * Create a new project
 * 
 * @param request - NextRequest with project data in body
 * @returns JSON response with created project or error
 */
export async function createProject(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received project data:', body);
    
    // Validate required fields
    const requiredFields = ['name', 'description', 'price', 'category', 'programmingLanguage'];
    for (const field of requiredFields) {
      if (!body[field]) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    console.log('Inserting project with data:', {
      name: body.name,
      description: body.description,
      price: body.price,
      youtubeUrl: body.youtubeUrl || null,
      category: body.category,
      programmingLanguage: body.programmingLanguage
    });
    
    // Insert new project
    const result = await query(
      `INSERT INTO projects 
      (name, description, price, youtube_url, category, programming_language) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *`,
      [
        body.name, 
        body.description, 
        body.price, 
        body.youtubeUrl || null, 
        body.category, 
        body.programmingLanguage
      ]
    );
    
    console.log('Project created successfully:', result.rows[0]);
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create project: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}

/**
 * Update an existing project
 * 
 * @param id - Project ID
 * @param request - NextRequest with updated project data
 * @returns JSON response with updated project or error
 */
export async function updateProject(id: string, request: NextRequest) {
  try {
    // Validate ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    // Check if project exists
    const checkResult = await query(
      'SELECT id FROM projects WHERE id = $1',
      [id]
    );
    
    if (checkResult.rowCount === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Build dynamic update query based on provided fields
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;
    
    // Only update fields that are provided
    if (body.name !== undefined) {
      updates.push(`name = $${paramIndex++}`);
      values.push(body.name);
    }
    
    if (body.description !== undefined) {
      updates.push(`description = $${paramIndex++}`);
      values.push(body.description);
    }
    
    if (body.price !== undefined) {
      updates.push(`price = $${paramIndex++}`);
      values.push(body.price);
    }
    
    if (body.youtubeUrl !== undefined) {
      updates.push(`youtube_url = $${paramIndex++}`);
      values.push(body.youtubeUrl);
    }
    
    if (body.category !== undefined) {
      updates.push(`category = $${paramIndex++}`);
      values.push(body.category);
    }
    
    if (body.programmingLanguage !== undefined) {
      updates.push(`programming_language = $${paramIndex++}`);
      values.push(body.programmingLanguage);
    }
    
    // If no fields to update, return the existing project
    if (updates.length === 0) {
      return NextResponse.json(
        { message: 'No fields to update' },
        { status: 400 }
      );
    }
    
    // Add ID as the last parameter
    values.push(id);
    
    // Execute update query
    const result = await query(
      `UPDATE projects SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );
    
    console.log('Project updated successfully:', result.rows[0]);
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to update project: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}

/**
 * Delete a project
 * 
 * @param id - Project ID
 * @returns JSON response with success message or error
 */
export async function deleteProject(id: string) {
  try {
    // Validate ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }
    
    // Check if project exists before deleting
    const checkResult = await query(
      'SELECT id FROM projects WHERE id = $1',
      [id]
    );
    
    if (checkResult.rowCount === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Delete the project
    await query(
      'DELETE FROM projects WHERE id = $1',
      [id]
    );
    
    return NextResponse.json(
      { message: 'Project deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}