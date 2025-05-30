// src/app/api/projects/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ProjectModel } from '../../../../models/Projects';

// GET /api/projects/[id] - Get a project by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const project = await ProjectModel.getProjectById(id);
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error(`Error fetching project:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[id] - Update a project
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    
    // Update the project
    const updatedProject = await ProjectModel.updateProject(id, {
      name: body.name,
      description: body.description,
      price: body.price,
      youtubeUrl: body.youtubeUrl,
      category: body.category,
      programmingLanguage: body.programmingLanguage
    });
    
    if (!updatedProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error(`Error updating project:`, error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id] - Delete a project
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const success = await ProjectModel.deleteProject(id);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting project:`, error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}