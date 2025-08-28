import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sprintId = searchParams.get("sprintId");

  if (!sprintId) {
    return NextResponse.json({ error: "sprintId is required" }, { status: 400 });
  }

  try {
    const data = await prisma.$queryRaw`
      SELECT * FROM sprint_cfd WHERE sprint_id = ${sprintId} ORDER BY log_date;
    `;
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch CFD" }, { status: 500 });
  }
}
