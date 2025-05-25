// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET /api/projects - Get all projects
export async function GET(request: NextRequest) {
  try {
    // Check for filters
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const programmingLanguage = url.searchParams.get('programmingLanguage');
    const search = url.searchParams.get('search');
    
    let sql = 'SELECT * FROM projects';
    const params: any[] = [];
    let paramIndex = 1;
    let whereAdded = false;
    
    // Add WHERE clauses if filters exist
    if (category && category !== 'all') {
      sql += ' WHERE category = $' + paramIndex++;
      params.push(category);
      whereAdded = true;
    }
    
    if (programmingLanguage && programmingLanguage !== 'all') {
      sql += whereAdded ? ' AND' : ' WHERE';
      sql += ' programming_language = $' + paramIndex++;
      params.push(programmingLanguage);
      whereAdded = true;
    }
    
    if (search) {
      sql += whereAdded ? ' AND' : ' WHERE';
      sql += ' (name ILIKE $' + paramIndex + ' OR description ILIKE $' + paramIndex + ')';
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
      youtubeUrl: body.youtubeUrl || null, // Optional field
      category: body.category,
      programmingLanguage: body.programmingLanguage
    });
    
    // Insert new project with updated schema (no image field)
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