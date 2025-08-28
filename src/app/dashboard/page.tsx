
import SprintStats from '@/components/sprint-stats';

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-8">Track your sprint progress here.</p>

      <SprintStats />
    </main>
  );
}
