
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SprintStatistics() {
  return (
    <Card className="lg:col-span-2 shadow-md rounded-2xl border-l-4 border-primary">
      <CardHeader>
        <CardTitle className="text-primary font-semibold">Sprint Statistics</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">24</p>
          <p className="text-sm">Backlog Items</p>
        </div>
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm">In Progress</p>
        </div>
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">18</p>
          <p className="text-sm">Completed</p>
        </div>
        <div className="p-4 bg-muted rounded-xl text-center">
          <p className="text-2xl font-bold">32</p>
          <p className="text-sm">Sprint Velocity</p>
        </div>
      </CardContent>
    </Card>
  );
}
