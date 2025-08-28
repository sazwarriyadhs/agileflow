
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Project Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Redesign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">65%</p>
              <p className="text-sm text-muted-foreground">Progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">40%</p>
              <p className="text-sm text-muted-foreground">Progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">80%</p>
              <p className="text-sm text-muted-foreground">Progress</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sprint Statistics */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sprint Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Backlog Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">124</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tasks in Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">38</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">86</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sprint Velocity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">45 pts</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-2">
          <Card>
            <CardContent className="p-4">
              <p><span className="font-semibold">Alice</span> completed task <span className="italic">"Design login page"</span></p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p><span className="font-semibold">Bob</span> moved <span className="italic">"API integration"</span> to In Progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p><span className="font-semibold">Eve</span> added new backlog item <span className="italic">"User profile settings"</span></p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
