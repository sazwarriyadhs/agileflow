
import { SprintStatistics } from '@/components/dashboard/sprint-statistics';
import { VelocityChart } from '@/components/velocity-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';

export default async function Dashboard() {
  return (
    <div className="space-y-6">
       <SprintStatistics />
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VelocityChart />
        <RecentActivity />
       </div>
    </div>
  );
}
