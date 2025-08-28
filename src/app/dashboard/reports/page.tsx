'use client';

import { VelocityChart } from '@/components/velocity-chart';
import { BurndownChart } from '@/components/burndown-chart';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ReportsPage() {
  const exportPDF = () => {
    const input = document.getElementById('report-section');
    if (!input) return;

    html2canvas(input, {
      logging: true,
      useCORS: true,
      scale: window.devicePixelRatio,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('report.pdf');
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Reports &amp; Charts</h2>
          <p className="text-muted-foreground">
            Analyze your team's performance and sprint progress.
          </p>
        </div>
        <Button onClick={exportPDF}>
          <Download className="mr-2 h-4 w-4" />
          Export to PDF
        </Button>
      </div>

      <div id="report-section">
        <div className="grid lg:grid-cols-2 gap-6">
          <VelocityChart />
          <BurndownChart />
        </div>
      </div>
    </div>
  );
}
