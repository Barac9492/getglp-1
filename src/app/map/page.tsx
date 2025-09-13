
'use client';

import * as React from 'react';
import { clinics as allClinics, items } from '@/lib/mock-data';
import type { Clinic, Report } from '@/lib/types';
import FilterPanel from '@/components/map/filter-panel';
import MapView from '@/components/map/map-view';
import Header from '@/components/layout/header';
import { Info, Share2 } from 'lucide-react';
import Legend from '@/components/map/legend';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, onSnapshot } from 'firebase/firestore';


export type Filters = {
  region: string;
  priceRange: [number, number];
  lastUpdated: string;
  verificationStatus: string;
};

export default function MapPage() {
  const [activeTab, setActiveTab] = React.useState<'wegovy' | 'mounjaro'>('wegovy');
  const [firestoreReports, setFirestoreReports] = React.useState<Report[]>([]);
  
  React.useEffect(() => {
    document.title = `${items.find(i => i.id === activeTab)?.displayNameKo} 재고 지도 | GLP 트래커`;
  }, [activeTab]);

  React.useEffect(() => {
    const reportsCollection = collection(db, 'reports');
    const q = query(reportsCollection, orderBy('reportedAt', 'desc'));
    
    // Use onSnapshot for real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reports = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          _date: data.reportedAt?.toDate() || new Date(),
          reportedAt: data.reportedAt?.toDate()?.toISOString() || new Date().toISOString(),
        } as Report;
      });
      setFirestoreReports(reports);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const reports = React.useMemo(() => {
    const adminReports = allClinics.map(clinic => {
      const wegovyReport = {
        id: `admin-${clinic.id}-wegovy`,
        clinicId: clinic.id,
        clinicName: clinic.name,
        item: 'wegovy' as const,
        availability: clinic.status.wegovy,
        priceKRW: clinic.price.wegovy,
        reportedAt: clinic.lastUpdated,
        reportedBy: 'admin',
        _date: new Date(clinic.lastUpdated),
        verification: 'admin-verified' as const,
        sourceType: 'other' as const,
        votes: 999,
      }
      const mounjaroReport = {
          id: `admin-${clinic.id}-mounjaro`,
          clinicId: clinic.id,
          clinicName: clinic.name,
          item: 'mounjaro' as const,
          availability: clinic.status.mounjaro,
          priceKRW: clinic.price.mounjaro,
          reportedAt: clinic.lastUpdated,
          reportedBy: 'admin',
          _date: new Date(clinic.lastUpdated),
          verification: 'admin-verified' as const,
          sourceType: 'other' as const,
          votes: 999,
      }
      if (clinic.status.wegovy === 'unknown' && clinic.status.mounjaro === 'unknown') {
        return [];
      }
      if(clinic.status.wegovy === 'unknown') {
        return [mounjaroReport];
      }
      if(clinic.status.mounjaro === 'unknown') {
        return [wegovyReport];
      }
      return [wegovyReport, mounjaroReport];
    }).flat() as Report[];

    return [...firestoreReports, ...adminReports];
  }, [firestoreReports]);

  const minPrice = 200000;
  const maxPrice = 600000;

  const [filters, setFilters] = React.useState<Filters>({
    region: 'all',
    priceRange: [minPrice, maxPrice],
    lastUpdated: 'all',
    verificationStatus: 'all',
  });

  const filteredClinics = React.useMemo(() => {
    return allClinics.filter((clinic) => {
      const { region, priceRange, lastUpdated, verificationStatus } = filters;

      // When filtering, we only want to show clinics that have the item available
      if (clinic.status[activeTab] !== 'available') return false;

      if (region !== 'all' && clinic.district !== region) {
        return false;
      }
      
      const price = clinic.price[activeTab];
      const hasPrice = price !== undefined && price !== null;
      
      // Price filter should only apply if the clinic has a price for the active product
      if (hasPrice && (price < priceRange[0] || price > priceRange[1])) {
        return false;
      }

      if (lastUpdated !== 'all') {
        const now = new Date();
        const updatedDate = new Date(clinic.lastUpdated);
        let days = 0;
        if (lastUpdated === '24h') days = 1;
        if (lastUpdated === '7d') days = 7;
        if (lastUpdated === '30d') days = 30;
        
        if (days > 0 && (now.getTime() - updatedDate.getTime()) > days * 24 * 60 * 60 * 1000) {
            return false;
        }
      }

      const latestReport = [...reports].filter(r => r.clinicId === clinic.id).sort((a,b) => b._date.getTime() - a._date.getTime())[0];
      if (verificationStatus !== 'all' && (!latestReport || latestReport.verification !== verificationStatus)) {
        return false;
      }

      return true;
    });
  }, [filters, reports, activeTab]);

  const productFilters = { product: activeTab, ...filters };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-full md:w-96 lg:w-[26rem] border-r flex flex-col">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'wegovy' | 'mounjaro')} className="p-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="wegovy">위고비</TabsTrigger>
                    <TabsTrigger value="mounjaro">마운자로</TabsTrigger>
                </TabsList>
            </Tabs>
            <ScrollArea className="flex-1">
                 <FilterPanel filters={filters} setFilters={setFilters} product={activeTab} minPrice={minPrice} maxPrice={maxPrice} />
            </ScrollArea>
        </aside>
        
        <div className="flex-1 relative">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'wegovy' | 'mounjaro')} className="w-full h-full">
              <TabsContent value="wegovy" className="w-full h-full m-0">
                <MapView clinics={filteredClinics} filters={productFilters} />
              </TabsContent>
              <TabsContent value="mounjaro" className="w-full h-full m-0">
                <MapView clinics={filteredClinics} filters={productFilters} />
              </TabsContent>
            </Tabs>
            <div className="absolute bottom-4 left-4 z-10 space-y-2 max-w-xs md:max-w-sm">
              <div className="bg-primary/80 text-primary-foreground p-3 rounded-md backdrop-blur-sm shadow-lg">
                <div className="flex items-start gap-3">
                    <Share2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-bold">함께 만드는 지도</p>
                        <p className="text-xs mt-1">더 많이 제보하고 공유할수록 정보가 정확해집니다!</p>
                    </div>
                </div>
              </div>

              <div className="bg-black/50 text-white text-xs p-2 rounded-md flex items-start gap-2">
                  <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                      <p className="font-bold">면책 조항</p>
                      <p>본 정보는 크라우드소싱 기반이며 정확성을 보장하지 않습니다. 방문 전 반드시 의료 기관에 직접 확인하세요.</p>
                  </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <Legend filters={productFilters} />
            </div>
        </div>
      </main>
    </div>
  );
}
