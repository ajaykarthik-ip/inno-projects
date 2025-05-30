// src/utils/api.ts
import { Project, ProjectInput } from '@/models/Projects';

// Base API URL
const API_BASE = '/api';

// Helper to handle API responses and errors
async function handleResponse(response: Response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.error || `Error: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }
  
  return response.json();
}

// Project API functions
export const projectsApi = {
  // Get all projects with optional filters
  async getProjects(filters?: {
    category?: string;
    programmingLanguage?: string;
    search?: string;
  }): Promise<Project[]> {
    // Build query string from filters
    const queryParams = new URLSearchParams();
    
    if (filters?.category) {
      queryParams.append('category', filters.category);
    }
    
    if (filters?.programmingLanguage) {
      queryParams.append('programmingLanguage', filters.programmingLanguage);
    }
    
    if (filters?.search) {
      queryParams.append('search', filters.search);
    }
    
    const queryString = queryParams.toString();
    const url = `${API_BASE}/projects${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url);
    return handleResponse(response);
  },
  
  // Get a single project by ID
  async getProject(id: string): Promise<Project> {
    const response = await fetch(`${API_BASE}/projects/${id}`);
    return handleResponse(response);
  },
  
  // Create a new project
  async createProject(project: ProjectInput): Promise<Project> {
    const response = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    
    return handleResponse(response);
  },
  
  // Update an existing project
  async updateProject(id: string, project: Partial<ProjectInput>): Promise<Project> {
    const response = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    
    return handleResponse(response);
  },
  
  // Delete a project
  async deleteProject(id: string): Promise<{ success: boolean }> {
    const response = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'DELETE',
    });
    
    return handleResponse(response);
  },
};