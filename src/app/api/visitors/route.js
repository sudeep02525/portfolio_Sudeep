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

// GET: Increment and return visitor count
export async function GET() {
  try {
    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db('portfolio');
    const visitors = db.collection('visitors');
    
    // Find and update the single document, or create if doesn't exist
    const result = await visitors.findOneAndUpdate(
      {}, // Empty filter to match the single document
      { 
        $inc: { totalVisitors: 1 },
        $set: { lastUpdated: new Date() }
      },
      { 
        upsert: true, // Create if doesn't exist
        returnDocument: 'after' // Return updated document
      }
    );
    
    // Return the updated count
    return NextResponse.json({
      success: true,
      totalVisitors: result.totalVisitors
    });
    
  } catch (error) {
    console.error('Error in GET /api/visitors:', error);
    
    // Return proper error response
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch visitor count'
      },
      { status: 500 }
    );
  }
}
