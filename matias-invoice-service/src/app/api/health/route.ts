import { NextResponse } from 'next/server';

/**
 * Health check endpoint (minimal response to avoid info disclosure)
 * GET /api/health
 */
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}

