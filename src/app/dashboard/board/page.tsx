import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { userStories, teamMembers } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const columns = ['Todo', 'In Progress', 'Done'];

const getAssignee = (assigneeId?: string) => teamMembers.find(tm => tm.id === assigneeId);

export default function BoardPage() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Kanban Board</h2>
        <p className="text-muted-foreground">
          Visualize your team's workflow and track progress.
        </p>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <TooltipProvider>
          {columns.map((column) => (
            <div key={column} className="rounded-lg bg-secondary p-4 h-full">
              <h3 className="font-semibold mb-4">{column}</h3>
              <div className="space-y-4">
                {userStories
                  .filter((story) => story.status === column)
                  .map((story) => {
                    const assignee = getAssignee(story.assignee);
                    return (
                      <Card key={story.id} className="shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">{story.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{story.id}</span>
                            <Badge variant="outline">{story.points} pts</Badge>
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
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}
