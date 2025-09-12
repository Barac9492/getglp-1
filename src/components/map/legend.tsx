
'use client';

import { items } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map } from 'lucide-react';
import { MapViewFilters } from './map-view';

interface LegendProps {
  filters: MapViewFilters;
}

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-sm">{label}</span>
  </div>
);

export default function Legend({ filters }: LegendProps) {
  const { product } = filters;

  const productInfo = items.find(i => i.id === product);
  const color = productInfo?.color || '#16a34a';
  const label = productInfo?.displayNameKo || '제품';
  
  const unavailableColor = '#dc2626';
  const unknownColor = '#6b7280';

  return (
    <Card className="bg-background/90 backdrop-blur-sm shadow-lg">
      <CardHeader className="p-4">
        <CardTitle className="text-base font-headline flex items-center gap-2">
          <Map className="h-4 w-4" />
          범례
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <LegendItem color={color} label={`${label} 가용`} />
        <LegendItem color={unavailableColor} label="비가용" />
        <LegendItem color={unknownColor} label="미확인" />
        
        <div className="flex items-center gap-2 pt-2">
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
          </div>
          <span className="text-sm">재고 확인됨</span>
        </div>
      </CardContent>
    </Card>
  );
}

    