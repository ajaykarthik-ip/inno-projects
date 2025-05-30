// src/models/Projects.ts
import { ObjectId, Document as MongoDocument } from 'mongodb';
import { getCollection, formatDocument, formatDocuments, createObjectId } from '@/lib/mongodb';

export interface Project extends MongoDocument {
  _id?: ObjectId;
  id?: string;
  name: string;
  description: string;
  price: string;
  youtube_url: string | null;
  category: string;
  programming_language: string;
  created_at: Date;
  updated_at?: Date;
}

export interface ProjectInput {
  name: string;
  description: string;
  price: string;
  youtubeUrl: string | null;
  category: string;
  programmingLanguage: string;
}

export interface ProjectFilter {
  category?: string;
  programmingLanguage?: string;
  search?: string;
}

export const ProjectModel = {
  // Get all projects with optional filters
  async getAllProjects(filters?: ProjectFilter): Promise<Project[]> {
    const collection = await getCollection<Project>('projects');
    
    // Build query based on filters
    const query: Record<string, unknown> = {};
    
    if (filters?.category) {
      query.category = filters.category;
    }
    
    if (filters?.programmingLanguage) {
      query.programming_language = filters.programmingLanguage;
    }
    
    if (filters?.search) {
      query.$or = [
        { name: { $regex: filters.search, $options: 'i' } },
        { description: { $regex: filters.search, $options: 'i' } },
      ];
    }
    
    const projects = await collection.find(query).sort({ created_at: -1 }).toArray();
    
    // Convert MongoDB _id to string id for client-side use
    return formatDocuments(projects);
  },
  
  // Get a single project by ID
  async getProjectById(id: string): Promise<Project | null> {
    const collection = await getCollection<Project>('projects');
    
    try {
      const objectId = createObjectId(id);
      if (!objectId) return null;
      
      const project = await collection.findOne({ _id: objectId });
      
      if (!project) return null;
      
      return formatDocument(project);
    } catch {
      console.error('Invalid ObjectId format:', id);
      return null;
    }
  },
  
  // Create a new project
  async createProject(projectData: ProjectInput): Promise<Project> {
    const collection = await getCollection<Project>('projects');
    
    const newProject = {
      name: projectData.name,
      description: projectData.description,
      price: projectData.price,
      youtube_url: projectData.youtubeUrl,
      category: projectData.category,
      programming_language: projectData.programmingLanguage,
      created_at: new Date()
    };
    
    const result = await collection.insertOne(newProject);
    
    return {
      ...newProject,
      _id: result.insertedId,
      id: result.insertedId.toString(),
    };
  },
  
  // Update an existing project
  async updateProject(id: string, projectData: Partial<ProjectInput>): Promise<Project | null> {
    const collection = await getCollection<Project>('projects');
    
    try {
      const objectId = createObjectId(id);
      if (!objectId) return null;
      
      // Prepare update data (converting from camelCase to snake_case for DB)
      const updateData: Partial<Project> = {};
      
      if (projectData.name !== undefined) updateData.name = projectData.name;
      if (projectData.description !== undefined) updateData.description = projectData.description;
      if (projectData.price !== undefined) updateData.price = projectData.price;
      if (projectData.youtubeUrl !== undefined) updateData.youtube_url = projectData.youtubeUrl;
      if (projectData.category !== undefined) updateData.category = projectData.category;
      if (projectData.programmingLanguage !== undefined) updateData.programming_language = projectData.programmingLanguage;
      
      // Add updated_at timestamp
      updateData.updated_at = new Date();
      
      await collection.updateOne(
        { _id: objectId },
        { $set: updateData }
      );
      
      // Return the updated project
      const updatedProject = await collection.findOne({ _id: objectId });
      
      if (!updatedProject) return null;
      
      return formatDocument(updatedProject);
    } catch {
      console.error('Error updating project with ID:', id);
      return null;
    }
  },
  
  // Delete a project
  async deleteProject(id: string): Promise<boolean> {
    const collection = await getCollection<Project>('projects');
    
    try {
      const objectId = createObjectId(id);
      if (!objectId) return false;
      
      const result = await collection.deleteOne({ _id: objectId });
      
      return result.deletedCount === 1;
    } catch {
      console.error('Error deleting project with ID:', id);
      return false;
    }
  }
};