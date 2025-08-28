import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';
import { UserStoryStatus } from '@prisma/client';

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
    <Card className="shadow-md rounded-2xl border-l-4 border-primary">
      <CardHeader>
        <CardTitle className="text-primary font-semibold">Sprint Statistics</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">{stats.backlogItems}</p>
          <p className="text-sm text-muted-foreground">Backlog Items</p>
        </div>
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">{stats.inProgressItems}</p>
          <p className="text-sm text-muted-foreground">In Progress</p>
        </div>
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">{stats.completedItems}</p>
          <p className="text-sm text-muted-foreground">Completed</p>
        </div>
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">{stats.velocity}</p>
          <p className="text-sm text-muted-foreground">Sprint Velocity</p>
        </div>
      </CardContent>
    </Card>
  );
}
