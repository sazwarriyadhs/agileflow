
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const summary = await prisma.$queryRaw`
      SELECT * FROM sprint_summary
      ORDER BY start_date;
    `;
    return NextResponse.json(summary);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch summary" }, { status: 500 });
  }
}
