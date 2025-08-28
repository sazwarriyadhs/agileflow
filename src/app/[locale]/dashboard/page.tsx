'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { VelocityChart } from '@/components/velocity-chart';
import { BurndownChart } from '@/components/burndown-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (locale: 'en' | 'id') => {
    startTransition(() => {
        const newPath = pathname.replace(/^\/(en|id)/, `/${locale}`);
        router.replace(newPath);
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <Button onClick={() => switchLocale(t('switchLocale') as 'en' | 'id')} variant="outline" disabled={isPending}>
          {t('switch')}
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <VelocityChart />
        <BurndownChart />
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight">{t('reports')}</h2>
        <p className="text-muted-foreground">{t('reportsDescription')}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('cfd')}</CardTitle>
            <CardDescription>{t('cfdDescription')}</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">[Chart Placeholder]</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
