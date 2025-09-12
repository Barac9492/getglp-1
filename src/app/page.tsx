'use client';

import * as React from 'react';
import { clinics as allClinics, items, reports as mockReports } from '@/lib/mock-data';
import type { Clinic } from '@/lib/types';
import FilterPanel from '@/components/map/filter-panel';
import MapView from '@/components/map/map-view';
import Header from '@/components/layout/header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SlidersHorizontal } from 'lucide-react';
import Legend from '@/components/map/legend';

export type Filters = {
  region: string;
  product: 'all' | 'wegovy' | 'mounjaro';
  priceRange: [number, number];
  lastUpdated: string;
  verificationStatus: string;
};

export default function Home() {
  const [filters, setFilters] = React.useState<Filters>({
    region: 'all',
    product: 'all',
    priceRange: [200000, 600000],
    lastUpdated: 'all',
    verificationStatus: 'all',
  });
  
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

  const filteredClinics = React.useMemo(() => {
    return allClinics.filter((clinic) => {
      const { region, product, priceRange, lastUpdated, verificationStatus } = filters;
      if (region !== 'all' && clinic.district !== region) {
        return false;
      }
      if (product !== 'all') {
        const price = clinic.price[product];
        if(clinic.status[product] !== 'available') return false;
        if (price && (price < priceRange[0] || price > priceRange[1])) {
          return false;
        }
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
  }, [filters, reports]);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 relative">
        <MapView clinics={filteredClinics} filters={filters} />
        <div className="absolute top-4 left-4 right-4 md:left-auto md:w-[24rem] lg:w-[26rem] z-10">
           <Accordion type="single" collapsible defaultValue="filters" className="bg-background/90 backdrop-blur-sm rounded-lg shadow-lg">
            <AccordionItem value="filters" className="border-none">
              <AccordionTrigger className="p-4 hover:no-underline">
                <div className="flex items-center gap-2 font-headline">
                  <SlidersHorizontal className="h-5 w-5" />
                  <span className="text-lg">필터</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border-t">
                  <FilterPanel filters={filters} setFilters={setFilters} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <Legend filters={filters} />
        </div>
      </main>
    </div>
  );
}
