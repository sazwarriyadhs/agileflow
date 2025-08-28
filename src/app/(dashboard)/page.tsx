
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { VelocityChart } from '@/components/velocity-chart';
import { BurndownChart } from '@/components/burndown-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const [lang, setLang] = useState<'id' | 'en'>('en');

  const content = {
    id: {
      title: 'Dasbor Scrum',
      subtitle: 'Selamat datang di dasbor sprint Anda!',
      burndown: 'Grafik Burndown Sprint',
      velocity: 'Kecepatan Tim',
      cfd: 'Diagram Alir Kumulatif',
      switch: 'Ubah ke Bahasa Inggris',
      reports: 'Laporan & Grafik',
      reportsDescription: 'Analisis kinerja tim dan kemajuan sprint Anda.',
      cfdDescription: 'Visualisasikan alur kerja Anda dari waktu ke waktu.',
    },
    en: {
      title: 'Scrum Dashboard',
      subtitle: 'Welcome to your sprint dashboard!',
      burndown: 'Sprint Burndown Chart',
      velocity: 'Team Velocity',
      cfd: 'Cumulative Flow Diagram',
      switch: 'Switch to Bahasa Indonesia',
      reports: 'Reports & Charts',
      reportsDescription: 'Analyze your team\'s performance and sprint progress.',
      cfdDescription: 'Visualize your workflow over time.',
    },
  };

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
         <div>
            <h2 className="text-2xl font-bold tracking-tight">{content[lang].title}</h2>
            <p className="text-muted-foreground">{content[lang].subtitle}</p>
         </div>
        <Button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} variant="outline">
          {content[lang].switch}
        </Button>
      </div>


      <div className="grid lg:grid-cols-2 gap-6">
        <VelocityChart />
        <BurndownChart />
      </div>

       <div>
        <h2 className="text-2xl font-bold tracking-tight">{content[lang].reports}</h2>
        <p className="text-muted-foreground">{content[lang].reportsDescription}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
         <Card>
            <CardHeader>
                <CardTitle>{content[lang].cfd}</CardTitle>
                <CardDescription>{content[lang].cfdDescription}</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">[Chart Placeholder]</p>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
