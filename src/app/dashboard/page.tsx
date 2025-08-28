
import { SprintStatistics } from '@/components/dashboard/sprint-statistics';
import { VelocityChart } from '@/components/velocity-chart';

export default async function Dashboard() {
  return (
    <div className="space-y-6">
       <SprintStatistics />
       <VelocityChart />
    </div>
  );
}
