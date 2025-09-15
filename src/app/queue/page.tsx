
'use client';

import * as React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { clinics } from '@/lib/mock-data';
import ReportCard from '@/components/queue/report-card';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Report } from '@/lib/types';
import { Loader2 } from 'lucide-react';


export default function QueuePage() {
    const [firestoreReports, setFirestoreReports] = React.useState<Report[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        document.title = '최신 제보 목록 | GLP 트래커';
        
        const reportsCollection = collection(db, 'reports');
        const q = query(reportsCollection, orderBy('reportedAt', 'desc'));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reports = snapshot.docs.map(doc => {
                const data = doc.data();
                const reportedAt = data.reportedAt instanceof Timestamp ? data.reportedAt.toDate() : new Date();
                return {
                    id: doc.id,
                    ...data,
                    _date: reportedAt,
                    reportedAt: reportedAt.toISOString(),
                } as Report;
            });
            setFirestoreReports(reports);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching reports:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

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
                {loading && (
                    <div className="flex items-center justify-center p-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="ml-4 text-muted-foreground">최신 제보를 불러오는 중입니다...</p>
                    </div>
                )}
                {!loading && allReports.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">아직 제보된 정보가 없습니다. 첫 번째 제보를 등록해보세요!</p>
                )}
                {!loading && allReports.map(report => (
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
