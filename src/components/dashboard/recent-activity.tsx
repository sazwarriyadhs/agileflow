
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RecentActivity() {
  return (
    <Card className="shadow-md rounded-2xl border-l-4 border-primary">
      <CardHeader>
        <CardTitle className="text-primary font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>🔹 John updated the API documentation</li>
          <li>🔹 Maria completed UI design</li>
          <li>🔹 Sprint 5 started yesterday</li>
        </ul>
      </CardContent>
    </Card>
  );
}
