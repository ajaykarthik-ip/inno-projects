// src/models/Project.ts
import { ObjectId } from 'mongodb';
import { getCollection } from '@/lib/mongodb';

export interface Project {
  _id?: ObjectId;
  id?: string;
  name: string;
  description: string;
  price: string;
  youtube_url: string | null;
  category: string;
  programming_language: string;
  created_at: Date;
}

export interface ProjectInput {
  name: string;
  description: string;
  price: string;
  youtubeUrl: string | null;
  category: string;
  programmingLanguage: string;
}

export const ProjectModel = {
  // Get all projects with optional filters
  async getAllProjects(filters?: {
    category?: string;
    programmingLanguage?: string;
    search?: string;
  }): Promise<Project[]> {
    const collection = await getCollection('projects');
    
    // Build query based on filters
    const query: any = {};
    
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
    return projects.map(project => ({
      ...project,
      id: project._id.toString(),
    }));
  },
  
  // Get a single project by ID
  async getProjectById(id: string): Promise<Project | null> {
    const collection = await getCollection('projects');
    
    try {
      const objectId = new ObjectId(id);
      const project = await collection.findOne({ _id: objectId });
      
      if (!project) return null;
      
      return {
        ...project,
        id: project._id.toString(),
      };
    } catch (error) {
      console.error('Invalid ObjectId format:', id);
      return null;
    }
  },
  
  // Create a new project
  async createProject(projectData: ProjectInput): Promise<Project> {
    const collection = await getCollection('projects');
    
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
    const collection = await getCollection('projects');
    
    try {
      const objectId = new ObjectId(id);
      
      // Prepare update data (converting from camelCase to snake_case for DB)
      const updateData: any = {};
      
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
      
      return {
        ...updatedProject,
        id: updatedProject._id.toString(),
      };
    } catch (error) {
      console.error('Error updating project:', error);
      return null;
    }
  },
  
  // Delete a project
  async deleteProject(id: string): Promise<boolean> {
    const collection = await getCollection('projects');
    
    try {
      const objectId = new ObjectId(id);
      const result = await collection.deleteOne({ _id: objectId });
      
      return result.deletedCount === 1;
    } catch (error) {
      console.error('Error deleting project:', error);
      return false;
    }
  }
};