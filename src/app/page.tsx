'use client';

import * as React from 'react';
import { clinics as allClinics, items } from '@/lib/mock-data';
import type { Clinic } from '@/lib/types';
import FilterPanel from '@/components/map/filter-panel';
import MapView from '@/components/map/map-view';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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

  const filteredClinics = React.useMemo(() => {
    return allClinics.filter((clinic) => {
      const { region, product, priceRange } = filters;
      if (region !== 'all' && clinic.district !== region) {
        return false;
      }
      if (product !== 'all') {
        if (clinic.status[product] !== 'available') return false;
        const price = clinic.price[product];
        if (price && (price < priceRange[0] || price > priceRange[1])) {
          return false;
        }
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex-1 container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <aside className="w-full md:w-80 lg:w-96 flex-shrink-0">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </aside>
        <main className="flex-1 min-h-[60vh] md:min-h-0">
          <MapView clinics={filteredClinics} filters={filters} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
