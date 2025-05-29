import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET /api/projects/get/[id] - Get a single project
export async function GET(request: NextRequest) {
  try {
    // Extract id from the URL
    const id = request.nextUrl.pathname.split('/').pop();
    
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