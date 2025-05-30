// src/lib/db.ts
import { MongoClient, Db, Collection } from 'mongodb';

// Use environment variables for connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Display startup banner
console.log('\n');
console.log('==================================================');
console.log('🔄 CHECKING DATABASE CONNECTION');
console.log('==================================================');

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not set');
  throw new Error('MONGODB_URI environment variable is not set');
}

let client: MongoClient;
let db: Db;
let isConnected = false;

// Initialize MongoDB connection
export async function connectToDatabase() {
  if (isConnected) {
    return { db, client };
  }

  try {
    client = new MongoClient(MONGODB_URI!);
    await client.connect();
    
    db = client.db('projects_db'); // You can specify your database name here
    isConnected = true;
    
    // Test the connection
    const serverInfo = await db.command({ serverStatus: 1 });
    
    console.log('✅ SUCCESSFULLY CONNECTED TO MONGODB DATABASE');
    console.log(`📊 Database: ${db.databaseName}`);
    console.log(`📅 MongoDB version: ${serverInfo.version}`);
    console.log('==================================================\n');
    
    return { db, client };
  } catch (err) {
    console.log('❌ DATABASE CONNECTION FAILED');
    console.error('Error details:', err);
    console.log('==================================================\n');
    throw err;
  }
}

// Get a collection
export async function getCollection(collectionName: string): Promise<Collection> {
  if (!isConnected) {
    await connectToDatabase();
  }
  return db.collection(collectionName);
}

// Helper function for queries (similar interface to the old pg query function)
export async function query(collectionName: string, operation: string, filter: any = {}, data: any = null) {
  const start = Date.now();
  
  try {
    const collection = await getCollection(collectionName);
    let result;
    
    switch (operation) {
      case 'find':
        result = await collection.find(filter).toArray();
        break;
      case 'findOne':
        result = await collection.findOne(filter);
        break;
      case 'insertOne':
        result = await collection.insertOne(data);
        break;
      case 'updateOne':
        result = await collection.updateOne(filter, { $set: data });
        break;
      case 'deleteOne':
        result = await collection.deleteOne(filter);
        break;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
    
    const duration = Date.now() - start;
    console.log(`✓ MongoDB operation ${operation} completed in ${duration}ms`);
    return result;
  } catch (error) {
    console.error('❌ MongoDB operation error:', { operation, error });
    throw error;
  }
}

// Clean up connection on exit
process.on('exit', () => {
  if (client) {
    console.log('🛑 Closing database connection');
    client.close();
  }
});

export { db, client };