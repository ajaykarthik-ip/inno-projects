// src/app/api/projects/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// DELETE /api/projects/[id] - Delete a project
export async function DELETE(request: NextRequest) {
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
    
    // Delete the project
    const result = await query(
      'DELETE FROM projects WHERE id = $1 RETURNING *',
      [id]
    );
    
    // Check if any row was deleted
    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
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