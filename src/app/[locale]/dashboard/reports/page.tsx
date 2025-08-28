import { VelocityChart } from '@/components/velocity-chart';
import { BurndownChart } from '@/components/burndown-chart';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Reports &amp; Charts</h2>
        <p className="text-muted-foreground">
          Analyze your team's performance and sprint progress.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <VelocityChart />
        <BurndownChart />
      </div>
    </div>
  );
}
