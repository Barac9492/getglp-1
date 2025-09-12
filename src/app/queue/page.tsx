import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { clinics } from '@/lib/mock-data';
import ReportCard from '@/components/queue/report-card';
import type { Metadata } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import type { Report } from '@/lib/types';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title: '최신 제보 목록',
  description: '위고비, 마운자로 등 GLP-1 의약품 가용성에 대한 최신 사용자 제보를 확인하고, 정보의 신뢰도를 높이기 위해 투표에 참여하세요.',
  alternates: {
    canonical: '/queue',
  },
};

async function getReportsFromFirestore(): Promise<Report[]> {
  noStore();
  try {
    const reportsCollection = collection(db, 'reports');
    const q = query(reportsCollection, orderBy('reportedAt', 'desc'));
    const reportSnapshot = await getDocs(q);
    const reports = reportSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        _date: data.reportedAt?.toDate() || new Date(),
        reportedAt: data.reportedAt?.toDate()?.toISOString() || new Date().toISOString(),
      } as Report;
    });
    return reports;
  } catch (error) {
    console.error("Error fetching reports from Firestore: ", error);
    return []; // Return empty array on error
  }
}


export default async function QueuePage() {
    const firestoreReports = await getReportsFromFirestore();

    const adminReports = [
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
    ] as Report[];

    const allReports = [...firestoreReports, ...adminReports].sort((a,b) => b._date.getTime() - a._date.getTime());

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
                {allReports.map(report => (
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
