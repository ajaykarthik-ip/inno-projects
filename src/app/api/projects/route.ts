// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ProjectModel } from '../../../models/Projects';    

// GET /api/projects - Get all projects with optional filters
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category') || undefined;
    const programmingLanguage = searchParams.get('programmingLanguage') || undefined;
    const search = searchParams.get('search') || undefined;
    
    // Get projects with filters
    const projects = await ProjectModel.getAllProjects({
      category,
      programmingLanguage,
      search
    });
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create a new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'description', 'price', 'category', 'programmingLanguage'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Create the project
    const project = await ProjectModel.createProject({
      name: body.name,
      description: body.description,
      price: body.price,
      youtubeUrl: body.youtubeUrl || null,
      category: body.category,
      programmingLanguage: body.programmingLanguage
    });
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}