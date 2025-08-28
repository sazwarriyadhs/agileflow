
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SprintStats() {
  const stats = [
    { title: "Total Backlog Items", value: 42 },
    { title: "Tasks in Progress", value: 18 },
    { title: "Completed Tasks", value: 27 },
    { title: "Sprint Velocity", value: "32 pts" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
