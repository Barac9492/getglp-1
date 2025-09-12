'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filters } from '@/app/page';

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const regions = [
  { value: 'all', label: '서울 전체' },
  { value: '서울 강남구', label: '서울 강남구' },
  { value: '서울 서초구', label: '서울 서초구' },
  { value: '서울 마포구', label: '서울 마포구' },
  { value: '성남시 분당구', label: '성남시 분당구' },
  { value: '화성시 동탄', label: '화성시 동탄' },
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

export default function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const handleFilterChange = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">필터</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['region', 'product', 'price']} className="w-full">
          <AccordionItem value="region">
            <AccordionTrigger>지역</AccordionTrigger>
            <AccordionContent>
              <Select
                value={filters.region}
                onValueChange={(value) => handleFilterChange('region', value)}
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

          <AccordionItem value="product">
            <AccordionTrigger>제품</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={filters.product}
                onValueChange={(value: 'all' | 'wegovy' | 'mounjaro') => handleFilterChange('product', value)}
                className="gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="r-all" />
                  <Label htmlFor="r-all">둘 다</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wegovy" id="r-wegovy" />
                  <Label htmlFor="r-wegovy">위고비</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mounjaro" id="r-mounjaro" />
                  <Label htmlFor="r-mounjaro">마운자로</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>가격 범위 (원)</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider
                  min={100000}
                  max={1000000}
                  step={10000}
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange('priceRange', value as [number, number])}
                />
                <div className="flex justify-between text-sm">
                  <span>{filters.priceRange[0].toLocaleString()}원</span>
                  <span>{filters.priceRange[1].toLocaleString()}원</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="updated">
            <AccordionTrigger>업데이트</AccordionTrigger>
            <AccordionContent>
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

          <AccordionItem value="verification">
            <AccordionTrigger>검증 상태</AccordionTrigger>
            <AccordionContent>
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
