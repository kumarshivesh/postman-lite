import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  const { id } = params;
  
  try {
    const deletedRequest = await prisma.request.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ success: true, data: deletedRequest });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
