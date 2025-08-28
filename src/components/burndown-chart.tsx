'use client';

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { burndownData } from '@/lib/data';

export function BurndownChart() {
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
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={burndownData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
              />
              <Legend wrapperStyle={{fontSize: "14px"}}/>
              <Line type="monotone" dataKey="ideal" name="Ideal Burndown" stroke="hsl(var(--secondary-foreground))" strokeDasharray="5 5" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="remaining" name="Remaining Effort" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
