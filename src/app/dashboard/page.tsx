
import { ProjectOverview } from '@/components/dashboard/project-overview';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { SprintStatistics } from '@/components/dashboard/sprint-statistics';
import { TeamChat } from '@/components/dashboard/team-chat';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      <ProjectOverview />
      <RecentActivity />
      <SprintStatistics />
      <TeamChat />
    </div>
  );
}
