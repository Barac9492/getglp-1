
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
  const color = productInfo?.color || 'hsl(var(--primary))';
  const label = productInfo?.displayNameKo || '제품';
  
  const availableColor = 'hsl(var(--primary))';
  const unavailableColor = 'hsl(var(--destructive))';
  const unknownColor = 'hsl(var(--muted-foreground))';

  return (
    <Card className="bg-background/90 backdrop-blur-sm shadow-lg">
      <CardHeader className="p-4">
        <CardTitle className="text-base font-headline flex items-center gap-2">
          <Map className="h-4 w-4" />
          범례
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: availableColor }} />
            <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: availableColor, opacity: 0.75 }} />
          </div>
          <span className="text-sm">{label} 재고 있음</span>
        </div>
        <LegendItem color={unavailableColor} label="재고 없음" />
        <LegendItem color={unknownColor} label="정보 없음" />
        
      </CardContent>
    </Card>
  );
}
