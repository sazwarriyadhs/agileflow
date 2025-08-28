'use server';

import { suggestDailyNotes } from '@/ai/flows/suggest-daily-notes';
import { z } from 'zod';

const FormSchema = z.object({
  sprintBacklog: z.string().min(10, { message: 'Please provide more details about the sprint backlog.' }),
  completedTasks: z.string().min(10, { message: 'Please provide more details about completed tasks.' }),
  previousDailyNotes: z.string().optional(),
});

export type AssistantState = {
  errors?: {
    sprintBacklog?: string[];
    completedTasks?: string[];
    previousDailyNotes?: string[];
  };
  message?: string | null;
  data?: {
    suggestedTalkingPoints: string;
  } | null;
};

export async function generateNotes(
  prevState: AssistantState,
  formData: FormData
): Promise<AssistantState> {
  const validatedFields = FormSchema.safeParse({
    sprintBacklog: formData.get('sprintBacklog'),
    completedTasks: formData.get('completedTasks'),
    previousDailyNotes: formData.get('previousDailyNotes'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
    };
  }

  try {
    const result = await suggestDailyNotes(validatedFields.data);
    return {
      message: 'Successfully generated talking points.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating notes. Please try again.',
    };
  }
}
