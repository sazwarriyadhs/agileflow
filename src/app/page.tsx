import {redirect} from 'next/navigation';

// This page only redirects to the /en/dashboard page
export default function RootPage() {
  redirect('/en/dashboard');
}
