import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.$queryRaw`
      SELECT * FROM sprint_velocity ORDER BY sprint_number;
    `;
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch velocity" }, { status: 500 });
  }
}
