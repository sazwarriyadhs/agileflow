'use client';

import { useEffect, useState } from 'react';
import { StatCard } from './stat-card';

type StatsData = {
    backlogItems: number;
    inProgressItems: number;
    completedItems: number;
    velocity: number;
};

export function SprintStatistics() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/sprint-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError('Failed to load sprint statistics.');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Backlog Items" value="Loading..." />
            <StatCard title="In Progress" value="Loading..." />
            <StatCard title="Completed" value="Loading..." />
            <StatCard title="Sprint Velocity" value="Loading..." />
        </div>
    );
  }

  if (error || !stats) {
    return <p className="text-destructive">{error || 'Could not load stats.'}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Backlog Items" value={stats.backlogItems} />
        <StatCard title="In Progress" value={stats.inProgressItems} />
        <StatCard title="Completed" value={stats.completedItems} />
        <StatCard title="Sprint Velocity" value={stats.velocity} />
    </div>
  );
}
