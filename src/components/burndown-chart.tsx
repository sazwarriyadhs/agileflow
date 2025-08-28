
'use client';

import { useEffect, useState } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type BurndownData = {
  log_date: string;
  total_remaining_hours: number;
};

export function BurndownChart() {
  const [data, setData] = useState<BurndownData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const sprintId = 'sprint-2'; // Example sprintId
        const res = await fetch(`/api/sprint-burndown?sprintId=${sprintId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch burndown data');
        }
        const jsonData = await res.json();
        // Assuming the API returns data with 'log_date' and 'total_remaining_hours'.
        // We'll also format the date for better readability.
        const formattedData = jsonData.map((item: any) => ({
          ...item,
          log_date: new Date(item.log_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        }));
        setData(formattedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sprint Burndown</CardTitle>
        <CardDescription>
          Tracking remaining effort against the ideal burndown for the current sprint.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {loading && <p>Loading chart...</p>}
          {error && <p className="text-destructive">Error: {error}</p>}
          {!loading && !error && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="log_date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                  }}
                />
                <Legend wrapperStyle={{fontSize: "14px"}}/>
                <Line type="monotone" dataKey="total_remaining_hours" name="Remaining Hours" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

