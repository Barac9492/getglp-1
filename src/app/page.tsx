
'use client';

import * as React from 'react';
import { clinics as allClinics, items, reports as mockReports } from '@/lib/mock-data';
import type { Clinic } from '@/lib/types';
import FilterPanel from '@/components/map/filter-panel';
import MapView from '@/components/map/map-view';
import Header from '@/components/layout/header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SlidersHorizontal, Info } from 'lucide-react';
import Legend from '@/components/map/legend';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export type Filters = {
  region: string;
  priceRange: [number, number];
  lastUpdated: string;
  verificationStatus: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<'wegovy' | 'mounjaro'>('wegovy');
  
  React.useEffect(() => {
    document.title = `${items.find(i => i.id === activeTab)?.displayNameKo} 재고 지도 | GLP 트래커`;
  }, [activeTab]);

  const reports = React.useMemo(() => {
    const adminReports = allClinics.map(clinic => {
      const wegovyReport = {
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
    }).flat();

    return [...mockReports, ...adminReports];
  }, []);

  const availableClinicsForProduct = React.useMemo(() => allClinics.filter(c => c.status[activeTab] === 'available' && c.price[activeTab]), [activeTab]);

  const [minPrice, maxPrice] = React.useMemo(() => {
      if (availableClinicsForProduct.length === 0) {
        return [100000, 1000000];
      }
      const prices = availableClinicsForProduct.map(c => c.price[activeTab]!).filter(p => p !== undefined && p !== null) as number[];
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      return [min, max];
  }, [availableClinicsForProduct, activeTab]);

  const [filters, setFilters] = React.useState<Filters>({
    region: 'all',
    priceRange: [minPrice, maxPrice],
    lastUpdated: 'all',
    verificationStatus: 'all',
  });

  React.useEffect(() => {
    setFilters(prev => ({
      ...prev,
      priceRange: [minPrice, maxPrice]
    }));
  }, [minPrice, maxPrice]);
  
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
      <main className="flex-1 relative">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'wegovy' | 'mounjaro')} className="w-full h-full">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <TabsList>
                    <TabsTrigger value="wegovy">위고비</TabsTrigger>
                    <TabsTrigger value="mounjaro">마운자로</TabsTrigger>
                </TabsList>
            </div>
          <TabsContent value="wegovy" className="w-full h-full m-0">
             <MapView clinics={filteredClinics} filters={productFilters} />
          </TabsContent>
          <TabsContent value="mounjaro" className="w-full h-full m-0">
             <MapView clinics={filteredClinics} filters={productFilters} />
          </TabsContent>
        </Tabs>

        <div className="absolute top-20 md:top-4 left-4 right-4 md:left-auto md:w-[24rem] lg:w-[26rem] z-10">
           <Accordion type="single" collapsible defaultValue="filters" className="bg-background/90 backdrop-blur-sm rounded-lg shadow-lg">
            <AccordionItem value="filters" className="border-none">
              <AccordionTrigger className="p-4 hover:no-underline">
                <div className="flex items-center gap-2 font-headline">
                  <SlidersHorizontal className="h-5 w-5" />
                  <span className="text-lg">필터</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border-t">
                  <FilterPanel filters={filters} setFilters={setFilters} product={activeTab} minPrice={minPrice} maxPrice={maxPrice} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="absolute bottom-4 left-4 z-10 bg-black/50 text-white text-xs p-2 rounded-md max-w-xs md:max-w-sm flex items-start gap-2">
            <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <div>
                <p className="font-bold">면책 조항</p>
                <p>본 정보는 크라우드소싱 기반이며 정확성을 보장하지 않습니다. 방문 전 반드시 의료 기관에 직접 확인하세요.</p>
            </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <Legend filters={productFilters} />
        </div>
      </main>
    </div>
  );
}
