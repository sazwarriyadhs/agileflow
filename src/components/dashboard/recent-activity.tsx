import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const logs = [
  { id: 1, comment: "Alice moved 'User Authentication' to Done.", log_date: new Date(Date.now() - 3600 * 1000).toISOString() },
  { id: 2, comment: "Bob started working on 'Create Product Backlog Page'.", log_date: new Date(Date.now() - 7200 * 1000).toISOString() },
  { id: 3, comment: "Charlie was assigned to 'Design Kanban Board UI'.", log_date: new Date(Date.now() - 10800 * 1000).toISOString() },
  { id: 4, comment: "Sprint 1 was completed successfully.", log_date: new Date(Date.now() - 86400 * 1000).toISOString() },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>A log of recent changes and updates across the project.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logs.map(log => (
            <div key={log.id} className="flex items-start gap-3">
               <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm">{log.comment}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(log.log_date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
