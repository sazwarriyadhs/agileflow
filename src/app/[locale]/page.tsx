
import { redirect } from 'next/navigation';

// This page only redirects to the dashboard page
export default function Home() {
  redirect('/dashboard');
}
