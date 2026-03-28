import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Global MongoDB client caching
let cachedClient = null;

async function connectToDatabase() {
  // Return cached client if available
  if (cachedClient) {
    return cachedClient;
  }

  // Check if MongoDB URI is set
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  // Create new MongoDB client
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  
  // Cache the client for reuse
  cachedClient = client;
  
  return client;
}

// GET: Fetch current visitor count WITHOUT incrementing
export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db('portfolio');
    const visitors = db.collection('visitors');
    
    const result = await visitors.findOne({});
    
    return NextResponse.json({
      success: true,
      totalVisitors: result?.totalVisitors || 0
    });
    
  } catch (error) {
    console.error('Error in GET /api/visitors/count:', error);
    // Return 0 gracefully on localhost / connection failure
    return NextResponse.json({ success: true, totalVisitors: 0 });
  }
}
