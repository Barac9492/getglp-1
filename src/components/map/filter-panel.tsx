
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filters } from '@/app/page';

interface FilterPanelProps {
  filters: Omit<Filters, 'product'>;
  setFilters: React.Dispatch<React.SetStateAction<Omit<Filters, 'product'>>>;
  product: 'wegovy' | 'mounjaro';
}

const regions = [
  { value: 'all', label: '전체' },
  { value: '서울 강남구', label: '서울 강남구' },
  { value: '서울 서초구', label: '서울 서초구' },
  { value: '서울 송파구', label: '서울 송파구' },
  { value: '서울 마포구', label: '서울 마포구' },
  { value: '서울 영등포구', label: '서울 영등포구' },
  { value: '서울 종로구', label: '서울 종로구' },
  { value: '서울 중구', label: '서울 중구' },
  { value: '서울 용산구', label: '서울 용산구' },
  { value: '서울 성동구', label: '서울 성동구' },
  { value: '서울 광진구', label: '서울 광진구' },
  { value: '서울 동대문구', label: '서울 동대문구' },
  { value: '서울 성북구', label: '서울 성북구' },
  { value: '서울 강북구', label: '서울 강북구' },
  { value: '서울 노원구', label: '서울 노원구' },
  { value: '서울 강동구', label: '서울 강동구' },
  { value: '서울 관악구', label: '서울 관악구' },
  { value: '서울 구로구', label: '서울 구로구' },
  { value: '서울 강서구', label: '서울 강서구' },
  { value: '서울 양천구', label: '서울 양천구' },
  { value: '서울 은평구', label: '서울 은평구' },
  { value: '서울 동작구', label: '서울 동작구' },
  { value: '성남시 분당구', label: '성남시 분당구' },
  { value: '동탄', label: '동탄' },
];


const updateOptions = [
    { value: 'all', label: '전체' },
    { value: '24h', label: '지난 24시간' },
    { value: '7d', label: '지난 7일' },
    { value: '30d', label: '지난 30일' },
];

const verificationOptions = [
    { value: 'all', label: '전체' },
    { value: 'community-verified', label: '커뮤니티 검증' },
    { value: 'admin-verified', label: '관리자 검증' },
];

export default function FilterPanel({ filters, setFilters, product }: FilterPanelProps) {
  const handleFilterChange = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardContent className="p-0">
        <Accordion type="multiple" defaultValue={['region', 'price']} className="w-full">
          <AccordionItem value="region" className="border-b-0">
            <AccordionTrigger className="px-4 py-3">지역</AccordionTrigger>
            <AccordionContent className="px-4">
              <Select
                value={filters.region}
                onValuecha  ge={(value) => handleFilterChange('region', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>{region.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="px-4 py-3">가격 범위 (원)</AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-4 pt-2">
                <Slider
                  min={100000}
                  max={1000000}
                  step={10000}
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange('priceRange', value as [number, number])}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{filters.priceRange[0].toLocaleString()}원</span>
                  <span>{filters.priceRange[1].toLocaleString()}원</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="updated" className="border-b-0">
            <AccordionTrigger className="px-4 py-3">업데이트</AccordionTrigger>
            <AccordionContent className="px-4">
                <RadioGroup
                    value={filters.lastUpdated}
                    onValueChange={(value) => handleFilterChange('lastUpdated', value)}
                    className="gap-2"
                >
                    {updateOptions.map(opt => (
                        <div key={opt.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt.value} id={`update-${opt.value}`} />
                            <Label htmlFor={`update-${opt.value}`}>{opt.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="verification" className="border-b-0">
            <AccordionTrigger className="px-4 py-3">검증 상태</AccordionTrigger>
            <AccordionContent className="px-4">
                 <RadioGroup
                    value={filters.verificationStatus}
                    onValueChange={(value) => handleFilterChange('verificationStatus', value)}
                    className="gap-2"
                >
                    {verificationOptions.map(opt => (
                        <div key={opt.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt.value} id={`verify-${opt.value}`} />
                            <Label htmlFor={`verify-${opt.value}`}>{opt.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

    