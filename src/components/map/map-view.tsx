'use client';

import * as React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Clinic } from '@/lib/types';
import type { Filters } from '@/app/page';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import ClinicInfoCard from './clinic-info-card';
import { items } from '@/lib/mock-data';

const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');

const MapMarkerIcon = ({ color, pulse }: { color: string, pulse?: boolean }) => (
    <div className="relative">
        {pulse && <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          className="w-8 h-8 drop-shadow-lg relative"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          <circle cx="12" cy="9.5" r="1.5" fill="white" />
        </svg>
    </div>
  );

export default function MapView({ clinics, filters }: { clinics: Clinic[]; filters: Filters }) {
  const getMarkerInfo = (clinic: Clinic) => {
    const { product } = filters;
    const { wegovy: wegovyStatus, mounjaro: mounjaroStatus } = clinic.status;

    const isWegovyAvailable = wegovyStatus === 'available';
    const isMounjaroAvailable = mounjaroStatus === 'available';
    
    let color = '#6b7280'; // gray (unknown)
    let pulse = false;

    if (product === 'wegovy') {
      if (isWegovyAvailable) {
        color = items.find(i => i.id === 'wegovy')?.color || '#16a34a';
        pulse = true;
      } else if (wegovyStatus === 'unavailable') {
        color = '#dc2626'; // red
      }
    } else if (product === 'mounjaro') {
      if (isMounjaroAvailable) {
        color = items.find(i => i.id === 'mounjaro')?.color || '#16a34a';
        pulse = true;
      } else if (mounjaroStatus === 'unavailable') {
        color = '#dc2626'; // red
      }
    } else { // 'all'
      if (isWegovyAvailable && isMounjaroAvailable) {
        color = '#8E44AD'; // purple for both
        pulse = true;
      } else if (isWegovyAvailable) {
        color = items.find(i => i.id === 'wegovy')?.color || '#16a34a';
        pulse = true;
      } else if (isMounjaroAvailable) {
        color = items.find(i => i.id === 'mounjaro')?.color || '#16a34a';
        pulse = true;
      } else if (wegovyStatus === 'unavailable' && mounjaroStatus === 'unavailable') {
        color = '#dc2626'; // red
      }
    }
    return { color, pulse };
  };

  return (
    <div className="relative w-full h-full">
      {mapImage && (
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          fill
          className="object-cover"
          data-ai-hint={mapImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0">
        {clinics.map((clinic) => {
          const { color, pulse } = getMarkerInfo(clinic);
          return (
            <Popover key={clinic.id}>
              <PopoverTrigger asChild>
                <button
                  className="absolute transform -translate-x-1/2 -translate-y-full focus:outline-none"
                  style={{ top: clinic.mapPosition.top, left: clinic.mapPosition.left }}
                  aria-label={`클리닉 정보 보기: ${clinic.name}`}
                >
                  <MapMarkerIcon color={color} pulse={pulse} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" side="top" align="center">
                <ClinicInfoCard clinic={clinic} items={items} />
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
    </div>
  );
}
