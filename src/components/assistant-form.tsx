'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Wand2 } from 'lucide-react';
import { generateNotes, type AssistantState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Generating...' : <><Wand2 className="mr-2 h-4 w-4" /> Generate Points</>}
    </Button>
  );
}

export function AssistantForm() {
  const initialState: AssistantState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(generateNotes, initialState);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
      <form action={dispatch}>
        <Card>
          <CardHeader>
            <CardTitle>Provide Context</CardTitle>
            <CardDescription>
              Enter the latest updates to get tailored talking points for your daily stand-up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sprintBacklog">Current Sprint Backlog</Label>
              <Textarea
                id="sprintBacklog"
                name="sprintBacklog"
                placeholder="List the user stories or tasks currently in the sprint backlog..."
                rows={5}
                required
              />
              {state.errors?.sprintBacklog &&
                state.errors.sprintBacklog.map((error: string) => (
                  <p className="text-sm font-medium text-destructive" key={error}>
                    {error}
                  </p>
                ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="completedTasks">Completed Tasks (since last stand-up)</Label>
              <Textarea
                id="completedTasks"
                name="completedTasks"
                placeholder="List tasks or stories completed recently..."
                rows={5}
                required
              />
               {state.errors?.completedTasks &&
                state.errors.completedTasks.map((error: string) => (
                  <p className="text-sm font-medium text-destructive" key={error}>
                    {error}
                  </p>
                ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="previousDailyNotes">Previous Daily Notes (Optional)</Label>
              <Textarea
                id="previousDailyNotes"
                name="previousDailyNotes"
                placeholder="Paste notes from the last meeting to provide more context..."
                rows={5}
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>

      <div className="sticky top-20">
        <Card className="min-h-[400px]">
          <CardHeader>
            <CardTitle>Suggested Talking Points</CardTitle>
            <CardDescription>
              AI-generated suggestions will appear here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.data?.suggestedTalkingPoints ? (
              <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                {state.data.suggestedTalkingPoints}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-10">
                <Wand2 className="mx-auto h-12 w-12" />
                <p className="mt-4">Your results will be shown here</p>
              </div>
            )}
             {state.message && !state.data && (
              <p className="text-sm font-medium text-destructive mt-4">{state.message}</p>
             )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
