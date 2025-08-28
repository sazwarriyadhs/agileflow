import { ProjectOverview } from '@/components/dashboard/project-overview';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { SprintStatistics } from '@/components/dashboard/sprint-statistics';
import { VelocityChart } from '@/components/velocity-chart';

export default async function Dashboard() {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <ProjectOverview />
         <RecentActivity />
       </div>
       <SprintStatistics />
       <VelocityChart />
    </div>
  );
}
