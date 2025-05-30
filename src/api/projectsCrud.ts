'use server';

// src/actions/projectsActions.ts
import { 
  getAllProjects, 
  getProjectById, 
  createProject, 
  updateProject, 
  deleteProject,
  type ProjectInput
} from '../services/projectServices';

/**
 * Server actions for projects
 * 
 * These functions can be called directly from client components
 * and handle all the server-side project operations.
 */

/**
 * Fetch all projects with optional filters
 */
export async function fetchProjects(filters?: {
  category?: string;
  programmingLanguage?: string;
  search?: string;
}) {
  try {
    return {
      success: true,
      data: await getAllProjects(filters)
    };
  } catch (error) {
    console.error('Action error fetching projects:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch projects'
    };
  }
}

/**
 * Fetch a single project by ID
 */
export async function fetchProjectById(id: string) {
  try {
    return {
      success: true,
      data: await getProjectById(id)
    };
  } catch (error) {
    console.error(`Action error fetching project ${id}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch project'
    };
  }
}

/**
 * Add a new project
 */
export async function addProject(projectData: ProjectInput) {
  try {
    return {
      success: true,
      data: await createProject(projectData)
    };
  } catch (error) {
    console.error('Action error creating project:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create project'
    };
  }
}

/**
 * Update an existing project
 */
export async function editProject(id: string, projectData: Partial<ProjectInput>) {
  try {
    return {
      success: true,
      data: await updateProject(id, projectData)
    };
  } catch (error) {
    console.error(`Action error updating project ${id}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update project'
    };
  }
}

/**
 * Remove a project
 */
export async function removeProject(id: string) {
  try {
    await deleteProject(id);
    return {
      success: true
    };
  } catch (error) {
    console.error(`Action error deleting project ${id}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete project'
    };
  }
}