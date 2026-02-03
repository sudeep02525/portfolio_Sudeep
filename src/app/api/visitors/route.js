import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to store visitor data
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'visitors.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read visitor data
function readVisitorData() {
  ensureDataDirectory();
  
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      totalVisitors: 0,
      uniqueVisitors: new Set(),
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify({
      totalVisitors: initialData.totalVisitors,
      uniqueVisitors: Array.from(initialData.uniqueVisitors),
      lastUpdated: initialData.lastUpdated
    }, null, 2));
    return initialData;
  }

  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    return {
      totalVisitors: data.totalVisitors || 0,
      uniqueVisitors: new Set(data.uniqueVisitors || []),
      lastUpdated: data.lastUpdated || new Date().toISOString()
    };
  } catch (error) {
    console.error('Error reading visitor data:', error);
    return {
      totalVisitors: 0,
      uniqueVisitors: new Set(),
      lastUpdated: new Date().toISOString()
    };
  }
}

// Write visitor data
function writeVisitorData(data) {
  ensureDataDirectory();
  
  const dataToWrite = {
    totalVisitors: data.totalVisitors,
    uniqueVisitors: Array.from(data.uniqueVisitors),
    lastUpdated: new Date().toISOString()
  };
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(dataToWrite, null, 2));
}

// Generate unique visitor ID based on IP and User-Agent
function generateVisitorId(request) {
  // Get headers from the request object directly
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 
             request.headers.get('x-real-ip') || 
             'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  // Create a simple hash of IP + User-Agent for uniqueness
  const visitorString = `${ip}-${userAgent}`;
  return Buffer.from(visitorString).toString('base64').slice(0, 32);
}

// GET: Return current visitor count
export async function GET() {
  try {
    const data = readVisitorData();
    
    return NextResponse.json({
      success: true,
      totalVisitors: data.totalVisitors,
      lastUpdated: data.lastUpdated
    });
  } catch (error) {
    console.error('Error in GET /api/visitors:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get visitor count' },
      { status: 500 }
    );
  }
}

// POST: Track a new visitor
export async function POST(request) {
  try {
    const body = await request.json();
    const { hasVisited } = body;
    
    // If user already visited (localStorage check), just return current count
    if (hasVisited) {
      const data = readVisitorData();
      return NextResponse.json({
        success: true,
        totalVisitors: data.totalVisitors,
        isNewVisitor: false
      });
    }
    
    // Generate unique visitor ID
    const visitorId = generateVisitorId(request);
    
    // Read current data
    const data = readVisitorData();
    
    // Check if this visitor ID already exists
    if (data.uniqueVisitors.has(visitorId)) {
      return NextResponse.json({
        success: true,
        totalVisitors: data.totalVisitors,
        isNewVisitor: false
      });
    }
    
    // Add new unique visitor
    data.uniqueVisitors.add(visitorId);
    data.totalVisitors = data.uniqueVisitors.size;
    
    // Save updated data
    writeVisitorData(data);
    
    return NextResponse.json({
      success: true,
      totalVisitors: data.totalVisitors,
      isNewVisitor: true
    });
    
  } catch (error) {
    console.error('Error in POST /api/visitors:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track visitor' },
      { status: 500 }
    );
  }
}