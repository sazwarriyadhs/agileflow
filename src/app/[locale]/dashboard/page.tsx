'use client';

import { useLocale } from 'next-intl';

export default function DashboardPage() {
  const locale = useLocale();

  const translations = {
    en: {
      title: 'Dashboard',
      welcome: 'Welcome to the Scrum Dashboard!',
    },
    id: {
      title: 'Dasbor',
      welcome: 'Selamat datang di Dasbor Scrum!',
    },
  };

  const t = translations[locale as 'en' | 'id'] || translations.en;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{t.title}</h1>
      <p>{t.welcome}</p>
    </main>
  );
}
