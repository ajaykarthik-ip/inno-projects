// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET /api/projects - Get all projects
export async function GET(request: NextRequest) {
  try {
    // Check for category filter
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const search = url.searchParams.get('search');
    
    let sql = 'SELECT * FROM projects';
    const params: any[] = [];
    
    // Add WHERE clauses if filters exist
    if (category && category !== 'all') {
      sql += ' WHERE category = $1';
      params.push(category);
      
      if (search) {
        sql += ' AND (title ILIKE $2 OR description ILIKE $2)';
        params.push(`%${search}%`);
      }
    } else if (search) {
      sql += ' WHERE title ILIKE $1 OR description ILIKE $1';
      params.push(`%${search}%`);
    }
    
    // Add order by
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

// POST /api/projects - Create a new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received project data:', body);
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'price', 'category', 'image'];
    for (const field of requiredFields) {
      if (!body[field]) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Use default image if not provided (additional safety)
    if (!body.image) {
      body.image = '/images/project-default.jpg';
    }
    
    console.log('Inserting project with data:', {
      title: body.title,
      description: body.description,
      price: body.price,
      category: body.category,
      image: body.image
    });
    
    // Insert new project
    const result = await query(
      'INSERT INTO projects (title, description, price, category, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [body.title, body.description, body.price, body.category, body.image]
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