'use client';
import { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { sprintSummaryData } from '@/lib/data';

type SummaryData = {
  sprint_name: string;
  total_tasks: number;
  completed_tasks: number;
  progress_percent: number;
};

export default function SprintSummaryPage() {
  const [data, setData] = useState<SummaryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Using static data instead of fetching from API
      setData(sprintSummaryData);
    } catch (err: any) {
      setError("Failed to load summary data");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Sprint Summary</h2>
        <p className="text-muted-foreground">
          A quick overview of each sprint's progress.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
          <CardDescription>
            High-level view of task completion across all sprints.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading && <p>Loading...</p>}
          {error && <p className="text-destructive">Error: {error}</p>}
          {!loading && !error && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sprint</TableHead>
                  <TableHead className="text-center">Total Tasks</TableHead>
                  <TableHead className="text-center">Completed Tasks</TableHead>
                  <TableHead className="w-[200px]">Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{row.sprint_name}</TableCell>
                    <TableCell className="text-center">{row.total_tasks}</TableCell>
                    <TableCell className="text-center">{row.completed_tasks}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={row.progress_percent} className="w-[60%]" />
                        <span className="text-sm text-muted-foreground">
                          {row.progress_percent}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
