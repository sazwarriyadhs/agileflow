import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const retrospectives = [
  { id: 1, title: "Sprint 1 Retrospective", date: "2024-07-14" },
  { id: 2, title: "Mid-Project Check-in", date: "2024-07-01" },
];

const retroColumns = {
  "What went well?": ["Great teamwork on the auth feature.", "Database setup was smooth."],
  "What could be improved?": ["Story point estimation accuracy.", "Communication with stakeholders."],
  "Action Items": ["Schedule a session on estimation techniques.", "Create a weekly stakeholder update email."],
};

export default function RetrospectivesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Retrospectives</h2>
          <p className="text-muted-foreground">
            Reflect on your sprints and create actionable improvements.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> New Retrospective
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Sprint 2 Retrospective</CardTitle>
          <p className="text-sm text-muted-foreground">July 28, 2024</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(retroColumns).map(([title, items]) => (
              <div key={title} className="rounded-lg bg-secondary p-4">
                <h3 className="font-semibold mb-4">{title}</h3>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <Card key={index} className="p-3 shadow-sm bg-background">
                      <p className="text-sm">{item}</p>
                    </Card>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add card
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
