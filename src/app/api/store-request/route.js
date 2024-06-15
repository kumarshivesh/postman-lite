import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { method, url, requestBody, responseBody } = await request.json();
    const savedRequest = await prisma.request.create({
      data: {
        method,
        url,
        requestBody: requestBody || '', // Ensure requestBody is always a string
        responseBody: JSON.stringify(responseBody), // Ensure responseBody is a string
      },
    });
    return NextResponse.json({ success: true, data: savedRequest });
  } catch (error) {
    console.error('Error saving request:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
