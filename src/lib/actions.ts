
'use server';

import { z } from 'zod';
import { suggestDailyNotes } from '@/ai/flows/suggest-daily-notes';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';
import bcrypt from 'bcryptjs';
import { createSession, deleteSession } from './auth';

// Daily Notes Assistant Actions
const AssistantFormSchema = z.object({
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
  const validatedFields = AssistantFormSchema.safeParse({
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

// Auth Actions
const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const validatedFields = LoginSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return 'Invalid form data.';
    }

    const { email, password } = validatedFields.data;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return 'Invalid credentials.';
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (passwordsMatch) {
      await createSession({ id: user.id, email: user.email, name: user.name, role: user.role });
    } else {
        return 'Invalid credentials.';
    }
  } catch (error) {
    console.error(error);
    return 'Something went wrong. Please try again.';
  }

  redirect('/dashboard');
}

const RegisterSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.'}),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  role: z.string(),
});

export async function registerUser(prevState: string | undefined, formData: FormData) {
  try {
    const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData.entries()));
     if (!validatedFields.success) {
        const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0];
        return firstError?.[0] ?? 'Invalid form data.';
    }

    const { name, email, password, role } = validatedFields.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return 'A user with this email already exists.';
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    await createSession({ id: user.id, email: user.email, name: user.name, role: user.role });
    
  } catch (error) {
    console.error(error);
    return 'Something went wrong. Please try again.';
  }
  
  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
