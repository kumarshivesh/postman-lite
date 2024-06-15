import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const request = await prisma.request.create({
      data: {
        method: 'GET',
        url: 'http://example.com',
        requestBody: '{}',
        responseBody: '{}',
      },
    });
    return NextResponse.json({ success: true, data: request });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
