
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { USER_STORY_STATUS } from "@/lib/constants";

export async function GET() {
  try {
    const backlogItems = await prisma.userStory.count({
        where: { status: USER_STORY_STATUS.BACKLOG }
    });
    const inProgressItems = await prisma.userStory.count({
        where: { status: USER_STORY_STATUS.IN_PROGRESS }
    });
    const completedItems = await prisma.userStory.count({
        where: { status: USER_STORY_STATUS.DONE }
    });
    const latestVelocity = await prisma.sprintVelocity.findFirst({
        orderBy: { sprintNumber: 'desc' }
    });

    const data = {
        backlogItems,
        inProgressItems,
        completedItems,
        velocity: latestVelocity?.completedEffort ?? 0
    };

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch sprint stats" }, { status: 500 });
  }
}
