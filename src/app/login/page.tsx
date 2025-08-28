'use client';

import { useState } from 'react';
import { authenticate } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsPending(true);

    try {
      const formData = new FormData(event.currentTarget);
      const errorMessage = await authenticate(undefined, formData);
      if (errorMessage) {
        setError(errorMessage);
      }
      // Redirect ditangani di dalam server action 'authenticate'
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back!</CardTitle>
              <CardDescription>
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  'Logging in...'
                ) : (
                  <>
                    <LogIn className="mr-2" /> Log In
                  </>
                )}
              </Button>
              {error && (
                <p className="text-sm text-center font-medium text-destructive">
                  {error}
                </p>
              )}
            </CardContent>
            <div className="p-6 pt-0 text-center text-sm">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Register
              </Link>
            </div>
          </Card>
        </form>
      </div>
    </main>
  );
}
