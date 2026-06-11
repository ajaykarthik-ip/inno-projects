// src/lib/mongodb.ts
import { MongoClient, Db, Collection, ObjectId, Document as MongoDocument } from 'mongodb';

// MongoDB connection string and database name from environment variables
const dbName = process.env.MONGODB_DB || 'projects_db';

// Connection options
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
};

// Cache the client promise on the global object so it survives module reloads
// (HMR in dev, and across serverless invocations in production). We connect
// LAZILY — only when a request actually needs the DB — never at import time.
// Connecting at import would run during `next build` ("Collecting page data")
// and a single network/SRV timeout there would crash the whole build.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    // Note: no dangling `.catch(err => throw err)` here. A re-thrown rejection
    // on a promise nobody awaits becomes an unhandled rejection and exits the
    // process. The rejection is surfaced wherever `getClientPromise()` is awaited.
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
}

// Helper function to get the database
export async function getDatabase(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

// Helper function to get a collection
export async function getCollection<T extends MongoDocument = MongoDocument>(collectionName: string): Promise<Collection<T>> {
  const database = await getDatabase();
  return database.collection<T>(collectionName);
}

// Advanced query helper with timing and logging
export async function executeQuery<T extends MongoDocument>(
  collectionName: string,
  operation: string,
  queryFn: (collection: Collection<T>) => Promise<unknown>
) {
  const start = Date.now();

  try {
    const collection = await getCollection<T>(collectionName);
    const result = await queryFn(collection);

    const duration = Date.now() - start;
    console.log(`✓ MongoDB ${operation} on ${collectionName} completed in ${duration}ms`);

    return result;
  } catch (err) {
    const duration = Date.now() - start;
    console.error(`❌ MongoDB ${operation} on ${collectionName} failed after ${duration}ms:`, err);
    throw err;
  }
}

// Helper to convert MongoDB _id to string id for client-side use
export function formatDocument<T extends { _id?: ObjectId }>(doc: T): T & { id: string } {
  if (!doc) return null as unknown as T & { id: string };

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
  } catch {
    console.error(`Invalid ObjectId: ${id}`);
    return null;
  }
}
