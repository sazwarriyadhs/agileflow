'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting daily notes for scrum meetings.
 *
 * It takes in the current sprint backlog, completed tasks, and previous daily notes to suggest relevant talking points.
 * - suggestDailyNotes - A function that generates suggested daily notes.
 * - SuggestDailyNotesInput - The input type for the suggestDailyNotes function.
 * - SuggestDailyNotesOutput - The return type for the suggestDailyNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDailyNotesInputSchema = z.object({
  sprintBacklog: z
    .string()
    .describe('The current sprint backlog items.'),
  completedTasks: z
    .string()
    .describe('A list of tasks completed since the last daily standup.'),
  previousDailyNotes: z
    .string()
    .optional()
    .describe('The notes from the previous daily standup meeting.'),
});
export type SuggestDailyNotesInput = z.infer<typeof SuggestDailyNotesInputSchema>;

const SuggestDailyNotesOutputSchema = z.object({
  suggestedTalkingPoints: z
    .string()
    .describe('Suggested talking points for the daily standup meeting.'),
});
export type SuggestDailyNotesOutput = z.infer<typeof SuggestDailyNotesOutputSchema>;

export async function suggestDailyNotes(
  input: SuggestDailyNotesInput
): Promise<SuggestDailyNotesOutput> {
  return suggestDailyNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDailyNotesPrompt',
  input: {schema: SuggestDailyNotesInputSchema},
  output: {schema: SuggestDailyNotesOutputSchema},
  prompt: `You are an AI assistant helping a scrum master prepare for daily stand-up meetings.

  Based on the current sprint backlog, completed tasks, and previous daily notes, suggest relevant talking points for the meeting.

  Consider the following information when generating the talking points:

  Sprint Backlog: {{{sprintBacklog}}}
  Completed Tasks: {{{completedTasks}}}
  Previous Daily Notes: {{{previousDailyNotes}}}

  Suggested Talking Points:`, // No Handlebars code is used for the LLM's output.
});

const suggestDailyNotesFlow = ai.defineFlow(
  {
    name: 'suggestDailyNotesFlow',
    inputSchema: SuggestDailyNotesInputSchema,
    outputSchema: SuggestDailyNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
