'use client';

import { VelocityChart } from '@/components/velocity-chart';
import { BurndownChart } from '@/components/burndown-chart';
import { Button } from '@/components/ui/button';
import { Download, FileSpreadsheet } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';

type VelocityDataItem = {
  sprint_number: number;
  planned_effort: number;
  completed_effort: number;
};

export default function ReportsPage() {
  const [velocityData, setVelocityData] = useState<VelocityDataItem[]>([]);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch('/api/sprint-velocity');
        const data = await response.json();
        setVelocityData(data);
    }
    fetchData();
  }, []);

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

  const exportExcel = () => {
    if(!velocityData.length) return;
    const data = [
      ['Sprint', 'Planned', 'Completed'],
      ...velocityData.map(item => [item.sprint_number, item.planned_effort, item.completed_effort])
    ];
  
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Velocity Report");
  
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "velocity_report.xlsx");
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
        <div className="flex gap-2">
          <Button onClick={exportPDF} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export to PDF
          </Button>
          <Button onClick={exportExcel}>
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Export to Excel
          </Button>
        </div>
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
