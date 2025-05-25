// src/lib/db.ts
import { Pool } from 'pg';

// Use environment variables for connection string
const connectionString = process.env.DATABASE_URL;

// Display startup banner
console.log('\n');
console.log('==================================================');
console.log('🔄 CHECKING DATABASE CONNECTION');
console.log('==================================================');

if (!connectionString) {
  console.error('❌ DATABASE_URL environment variable is not set');
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create a new pool instance
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false // Required for Neon
  },
  max: 20, // Maximum connections in the pool
  idleTimeoutMillis: 30000, // Time before idle client is closed
  connectionTimeoutMillis: 5000, // Connection timeout (increased)
});

// Test the connection immediately
(async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time, current_database() as db_name, version() as pg_version');
    client.release();
    
    const connectionTime = result.rows[0].current_time;
    const dbName = result.rows[0].db_name;
    const pgVersion = result.rows[0].pg_version.split(' ')[0];
    
    console.log('✅ SUCCESSFULLY CONNECTED TO NEON POSTGRESQL DATABASE');
    console.log(`📊 Database: ${dbName}`);
    console.log(`📅 Database time: ${connectionTime}`);
    console.log(`📌 PostgreSQL version: ${pgVersion}`);
    console.log('==================================================\n');
  } catch (err) {
    console.log('❌ DATABASE CONNECTION FAILED');
    console.error('Error details:', err);
    console.log('==================================================\n');
  }
})();

// Export query method
export async function query(text: string, params?: any[]) {
  const start = Date.now();
  
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log(`✓ Query completed in ${duration}ms, rows: ${res.rowCount}`);
    return res;
  } catch (error) {
    console.error('❌ Query error:', { text, error });
    throw error;
  }
}

// Clean up pool on exit
process.on('exit', () => {
  console.log('🛑 Closing database pool');
  pool.end();
});

export default {
  query,
  pool
};