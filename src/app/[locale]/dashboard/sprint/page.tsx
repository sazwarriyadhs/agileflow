import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { userStories, sprints } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const backlogStories = userStories.filter(story => story.status === 'Backlog');
const currentSprint = sprints.find(s => s.name.includes('Core Features MVP'));

export default function SprintPlanningPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Sprint Planning</h2>
          <p className="text-muted-foreground">
            Drag stories from the backlog to the current sprint.
          </p>
        </div>
        <Button variant="secondary">Configure Sprint</Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Product Backlog</CardTitle>
            <CardDescription>{backlogStories.length} stories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {backlogStories.map(story => (
              <Card key={story.id} className="p-3 flex justify-between items-center group">
                <div>
                  <p className="font-medium">{story.title}</p>
                  <p className="text-sm text-muted-foreground">{story.id}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{story.points} pts</Badge>
                  <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-4 w-4"/>
                  </Button>
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>
        
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>{currentSprint?.name}</CardTitle>
            <CardDescription>{currentSprint?.goal}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             <Separator/>
             <p className="text-muted-foreground text-sm text-center py-4">Drag items here to add to sprint</p>
            {currentSprint?.stories.map(story => (
              <Card key={story.id} className="p-3 bg-background">
                <p className="font-medium">{story.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{story.points} pts</Badge>
                  <Badge variant="secondary">{story.status}</Badge>
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
