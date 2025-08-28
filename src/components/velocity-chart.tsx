'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { velocityData } from '@/lib/data';

export function VelocityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Velocity</CardTitle>
        <CardDescription>
          Story points planned vs. completed over the last few sprints.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="sprint" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
              />
              <Legend wrapperStyle={{fontSize: "14px"}}/>
              <Bar dataKey="planned" fill="hsl(var(--secondary))" name="Planned" radius={[4, 4, 0, 0]} />
              <Bar dataKey="completed" fill="hsl(var(--primary))" name="Completed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
