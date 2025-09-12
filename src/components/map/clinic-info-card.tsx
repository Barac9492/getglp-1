
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Phone, Bot } from 'lucide-react';
import type { Clinic, Item } from '@/lib/types';
import { AvailabilityPredictor } from '../availability-predictor';

interface ClinicInfoCardProps {
  clinic: Clinic;
  items: Item[];
}

const getBadgeVariant = (status: 'available' | 'unavailable' | 'unknown'): 'default' | 'destructive' | 'secondary' => {
  switch (status) {
    case 'available':
      return 'default';
    case 'unavailable':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const getStatusInKorean = (status: 'available' | 'unavailable' | 'unknown'): string => {
    switch (status) {
        case 'available': return '재고 있음';
        case 'unavailable': return '재고 없음';
        default: return '정보 없음';
    }
}

export default function ClinicInfoCard({ clinic, items }: ClinicInfoCardProps) {
  const lastUpdatedDate = new Date(clinic.lastUpdated).toLocaleDateString('ko-KR');

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.name)}&query_place_id=${clinic.geohash}`;

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="font-headline">{clinic.name}</CardTitle>
        <div className="text-sm text-muted-foreground pt-1">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {clinic.address}</p>
          {clinic.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {clinic.phone}</p>}
          {clinic.website && <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{clinic.website}</a></p>}
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2 rounded-md bg-muted/50 p-3">
            <h4 className="text-sm font-semibold">실시간 현황</h4>
            {items.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                    <span className="font-medium">{item.displayNameKo}</span>
                    <div className="flex items-center gap-2">
                        {clinic.price[item.id] && <span className="text-sm text-muted-foreground">{clinic.price[item.id]?.toLocaleString()}원</span>}
                        <Badge variant={getBadgeVariant(clinic.status[item.id])} style={clinic.status[item.id] === 'available' ? {backgroundColor: item.color} : {}}>
                            {getStatusInKorean(clinic.status[item.id])}
                        </Badge>
                    </div>
                </div>
            ))}
            <p className="text-xs text-muted-foreground pt-1">최신 업데이트: {lastUpdatedDate}</p>
        </div>

        <div className="space-y-2">
            <h4 className="text-sm font-semibold flex items-center gap-1"><Bot className="h-4 w-4" /> 커뮤니티 예측</h4>
            <AvailabilityPredictor clinic={clinic} item="wegovy" />
            <AvailabilityPredictor clinic={clinic} item="mounjaro" />
        </div>

      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-2 p-4 pt-0">
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full">길찾기</Button>
        </a>
        <Link href={`/report?clinicId=${clinic.id}`} passHref>
          <Button className="w-full">정보 제보/수정</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
