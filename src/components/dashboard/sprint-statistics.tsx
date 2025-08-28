import { prisma } from '@/lib/prisma';
import { UserStoryStatus } from '@prisma/client';
import { StatCard } from './stat-card';

async function getStats() {
    const backlogItems = await prisma.userStory.count({
        where: { status: UserStoryStatus.Backlog }
    });
    const inProgressItems = await prisma.userStory.count({
        where: { status: UserStoryStatus.InProgress }
    });
    const completedItems = await prisma.userStory.count({
        where: { status: UserStoryStatus.Done }
    });
    const latestVelocity = await prisma.sprintVelocity.findFirst({
        orderBy: { sprintNumber: 'desc' }
    });

    return {
        backlogItems,
        inProgressItems,
        completedItems,
        velocity: latestVelocity?.completed ?? 0
    };
}


export async function SprintStatistics() {
  const stats = await getStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Backlog Items" value={stats.backlogItems} />
        <StatCard title="In Progress" value={stats.inProgressItems} />
        <StatCard title="Completed" value={stats.completedItems} />
        <StatCard title="Sprint Velocity" value={stats.velocity} />
    </div>
  );
}
