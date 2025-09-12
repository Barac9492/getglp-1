import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { reports as mockReports, clinics } from '@/lib/mock-data';
import ReportCard from '@/components/queue/report-card';

export default function QueuePage() {
    const allReports = [
        ...mockReports,
        ...clinics.map(c => ({
            id: `admin-${c.id}-wegovy`,
            clinicId: c.id,
            clinicName: c.name,
            item: 'wegovy' as const,
            availability: c.status.wegovy,
            priceKRW: c.price.wegovy,
            reportedAt: c.lastUpdated,
            _date: new Date(c.lastUpdated),
            reportedBy: 'admin',
            sourceType: 'other' as const,
            verification: 'admin-verified' as const,
            votes: 999,
        })).filter(r => r.availability !== 'unknown'),
         ...clinics.map(c => ({
            id: `admin-${c.id}-mounjaro`,
            clinicId: c.id,
            clinicName: c.name,
            item: 'mounjaro' as const,
            availability: c.status.mounjaro,
            priceKRW: c.price.mounjaro,
            reportedAt: c.lastUpdated,
             _date: new Date(c.lastUpdated),
            reportedBy: 'admin',
            sourceType: 'other' as const,
            verification: 'admin-verified' as const,
            votes: 999,
        })).filter(r => r.availability !== 'unknown'),
    ]
    const sortedReports = allReports.sort((a,b) => b._date.getTime() - a._date.getTime());

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">제보 목록</h1>
                <p className="text-muted-foreground mt-2">최신 제보를 확인하고 투표하여 정보의 신뢰도를 높여주세요.</p>
            </div>
            
            <div className="space-y-4">
                {sortedReports.map(report => (
                    <ReportCard key={report.id} report={report} />
                ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
