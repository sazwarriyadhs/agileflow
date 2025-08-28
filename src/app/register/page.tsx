
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { registerUser } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Creating account...' : <><UserPlus className="mr-2" /> Create Account</>}
    </Button>
  );
}

export default function RegisterPage() {
  const [errorMessage, dispatch] = useFormState(registerUser, undefined);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <form action={dispatch}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create an Account</CardTitle>
              <CardDescription>Join AgileFlow to manage your projects.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
               <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                 <Select name="role" required defaultValue="user">
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scrum_master">Scrum Master</SelectItem>
                    <SelectItem value="project_manager">Project Manager</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="user">Team Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <RegisterButton />
               {errorMessage && (
                <p className="text-sm text-center font-medium text-destructive">{errorMessage}</p>
              )}
            </CardContent>
            <div className="p-6 pt-0 text-center text-sm">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-primary hover:underline">
                    Log In
                </Link>
            </div>
          </Card>
        </form>
      </div>
    </main>
  );
}
