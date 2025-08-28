
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProjectOverview() {
  return (
    <Card className="shadow-md rounded-2xl border-l-4 border-primary">
      <CardHeader>
        <CardTitle className="text-primary font-semibold">Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>📌 Total Projects: 8</li>
          <li>✅ Completed: 5</li>
          <li>🚧 In Progress: 2</li>
          <li>🕒 Pending: 1</li>
        </ul>
      </CardContent>
    </Card>
  );
}
