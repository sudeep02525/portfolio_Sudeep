import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// MongoDB connection
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI environment variable is not set - using fallback mode');
    return null; // Return null for fallback handling
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  
  const db = client.db('portfolio');
  
  cachedClient = client;
  cachedDb = db;
  
  return db;
}

// Generate unique visitor ID
function generateVisitorId(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 
             request.headers.get('x-real-ip') || 
             'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  const visitorString = `${ip}-${userAgent}`;
  return Buffer.from(visitorString).toString('base64').slice(0, 32);
}

// GET: Return current visitor count
export async function GET() {
  try {
    const db = await connectToDatabase();
    
    // If MongoDB is not available, return fallback data
    if (!db) {
      return NextResponse.json({
        success: true,
        totalVisitors: 0,
        lastUpdated: new Date().toISOString(),
        fallback: true
      });
    }
    
    const visitors = db.collection('visitors');
    const visitorDoc = await visitors.findOne({ _id: 'visitors' });
    const totalVisitors = visitorDoc?.visitorIds?.length || 0;
    
    return NextResponse.json({
      success: true,
      totalVisitors,
      lastUpdated: visitorDoc?.lastUpdated || new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in GET /api/visitors:', error);
    
    // Return fallback data on error
    return NextResponse.json({
      success: true,
      totalVisitors: 0,
      lastUpdated: new Date().toISOString(),
      fallback: true
    });
  }
}

// POST: Track a new visitor
export async function POST(request) {
  try {
    const body = await request.json();
    const { hasVisited } = body;
    
    const db = await connectToDatabase();
    
    // If MongoDB is not available, return fallback data
    if (!db) {
      return NextResponse.json({
        success: true,
        totalVisitors: 0,
        isNewVisitor: false,
        fallback: true
      });
    }
    
    const visitorId = generateVisitorId(request);
    const visitors = db.collection('visitors');
    
    // Use $addToSet to avoid duplicates
    const result = await visitors.updateOne(
      { _id: 'visitors' },
      { 
        $addToSet: { visitorIds: visitorId },
        $set: { lastUpdated: new Date() }
      },
      { upsert: true }
    );
    
    // Get updated count
    const visitorDoc = await visitors.findOne({ _id: 'visitors' });
    const totalVisitors = visitorDoc?.visitorIds?.length || 0;
    
    const isNewVisitor = result.modifiedCount > 0 || result.upsertedCount > 0;
    
    return NextResponse.json({
      success: true,
      totalVisitors,
      isNewVisitor: !hasVisited && isNewVisitor
    });
    
  } catch (error) {
    console.error('Error in POST /api/visitors:', error);
    
    // Return fallback data on error
    return NextResponse.json({
      success: true,
      totalVisitors: 0,
      isNewVisitor: false,
      fallback: true
    });
  }
}