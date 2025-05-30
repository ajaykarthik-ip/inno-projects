// src/lib/mongodb.ts
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

// MongoDB connection string and database name from environment variables
const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'projects_db';

// Display startup banner
console.log('\n');
console.log('==================================================');
console.log('🔄 INITIALIZING MONGODB CONNECTION');
console.log('==================================================');

if (!uri) {
  console.error('❌ MONGODB_URI environment variable is not set');
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Connection options
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
};

// Global MongoDB client and database instances
let client: MongoClient;
let clientPromise: Promise<MongoClient>;
let db: Db;
let isConnected = false;

// In development, use a global variable to preserve the connection between hot reloads
declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  var _db: Db;
  var _isConnected: boolean;
}

// Create cached connection
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect()
      .then((client) => {
        console.log('✅ CONNECTED TO MONGODB (Development)');
        console.log(`📊 Database: ${dbName}`);
        
        global._db = client.db(dbName);
        global._isConnected = true;
        
        return client;
      })
      .catch((err) => {
        console.error('❌ MONGODB CONNECTION ERROR:', err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
  db = global._db;
  isConnected = global._isConnected;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then((client) => {
      console.log('✅ CONNECTED TO MONGODB (Production)');
      console.log(`📊 Database: ${dbName}`);
      
      db = client.db(dbName);
      isConnected = true;
      
      return client;
    })
    .catch((err) => {
      console.error('❌ MONGODB CONNECTION ERROR:', err);
      throw err;
    });
}

// Helper function to get the database
export async function getDatabase(): Promise<Db> {
  if (!isConnected) {
    await clientPromise;
    if (process.env.NODE_ENV === 'development') {
      db = global._db;
      isConnected = global._isConnected;
    }
  }
  return db;
}

// Helper function to get a collection
export async function getCollection<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>(collectionName);
}

// Advanced query helper with timing and logging
export async function executeQuery<T extends Document>(
  collectionName: string,
  operation: string,
  queryFn: (collection: Collection<T>) => Promise<any>
) {
  const start = Date.now();
  let result;
  
  try {
    const collection = await getCollection<T>(collectionName);
    result = await queryFn(collection);
    
    const duration = Date.now() - start;
    console.log(`✓ MongoDB ${operation} on ${collectionName} completed in ${duration}ms`);
    
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.error(`❌ MongoDB ${operation} on ${collectionName} failed after ${duration}ms:`, error);
    throw error;
  }
}

// Helper to convert MongoDB _id to string id for client-side use
export function formatDocument<T extends { _id?: ObjectId }>(doc: T): T & { id: string } {
  if (!doc) return null as any;
  
  const { _id, ...rest } = doc;
  return {
    ...rest,
    _id,
    id: _id ? _id.toString() : undefined,
  } as T & { id: string };
}

// Helper to format multiple documents
export function formatDocuments<T extends { _id?: ObjectId }>(docs: T[]): (T & { id: string })[] {
  return docs.map(formatDocument);
}

// Helper to create ObjectId from string (with error handling)
export function createObjectId(id: string): ObjectId | null {
  try {
    return new ObjectId(id);
  } catch (error) {
    console.error(`Invalid ObjectId: ${id}`);
    return null;
  }
}

// Export client promise for use in other modules
export { clientPromise, db };

// Clean up connection on process termination
['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, async () => {
    if (client) {
      console.log(`🛑 Closing MongoDB connection due to ${signal}`);
      await client.close();
      console.log('✅ MongoDB connection closed');
    }
    process.exit(0);
  });
});

// Log completion of setup
console.log('==================================================');
console.log('🚀 MONGODB CONNECTION SETUP COMPLETE');
console.log('==================================================\n');