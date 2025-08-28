import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { userStories, teamMembers } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function BacklogPage() {
  const getAssignee = (assigneeId?: string) => teamMembers.find(tm => tm.id === assigneeId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Product Backlog</h2>
          <p className="text-muted-foreground">
            Here's the list of all user stories. Prioritize and plan your sprints.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add User Story
        </Button>
      </div>

      <div className="space-y-4">
        <TooltipProvider>
          {userStories.map((story) => {
            const assignee = getAssignee(story.assignee);
            return (
              <Card key={story.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-muted-foreground">{story.id}</span>
                        <span>{story.title}</span>
                      </CardTitle>
                      <CardDescription className="mt-1">{story.description}</CardDescription>
                    </div>
                    <Badge variant={story.status === 'Done' ? 'default' : 'secondary'}>{story.status}</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{story.points} Points</Badge>
                    {story.epic && <Badge variant="outline">Epic: {story.epic}</Badge>}
                  </div>
                  {assignee && (
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://picsum.photos/seed/${assignee.id}/100`} alt={assignee.name} data-ai-hint="person" />
                          <AvatarFallback>{assignee.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Assigned to {assignee.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
}
