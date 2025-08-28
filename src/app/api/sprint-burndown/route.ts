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
      SELECT log_date AS "logDate", remaining_effort AS "remainingEffort", ideal_effort AS "idealEffort" FROM sprint_burndown WHERE sprint_id = ${sprintId} ORDER BY log_date;
    `;
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch burndown" }, { status: 500 });
  }
}
