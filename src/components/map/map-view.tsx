'use client';

import * as React from 'react';
import type { Clinic } from '@/lib/types';
import type { Filters } from '@/app/page';
import { APIProvider, Map, AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import ClinicInfoCard from './clinic-info-card';
import { items } from '@/lib/mock-data';

export default function MapView({ clinics, filters }: { clinics: Clinic[]; filters: Filters }) {
  const [selectedClinicId, setSelectedClinicId] = React.useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const getMarkerInfo = (clinic: Clinic) => {
    const { product } = filters;
    const { wegovy: wegovyStatus, mounjaro: mounjaroStatus } = clinic.status;

    const isWegovyAvailable = wegovyStatus === 'available';
    const isMounjaroAvailable = mounjaroStatus === 'available';
    
    let color = '#6b7280'; // gray (unknown)
    let borderColor = '#4b5563';
    let pulse = false;

    if (product === 'wegovy') {
      if (isWegovyAvailable) {
        color = items.find(i => i.id === 'wegovy')?.color || '#16a34a';
        borderColor = '#15803d';
        pulse = true;
      } else if (wegovyStatus === 'unavailable') {
        color = '#dc2626'; // red
        borderColor = '#b91c1c';
      }
    } else if (product === 'mounjaro') {
      if (isMounjaroAvailable) {
        color = items.find(i => i.id === 'mounjaro')?.color || '#16a34a';
        borderColor = '#991b1b';
        pulse = true;
      } else if (mounjaroStatus === 'unavailable') {
        color = '#dc2626'; // red
        borderColor = '#b91c1c';
      }
    } else { // 'all'
      if (isWegovyAvailable && isMounjaroAvailable) {
        color = '#8E44AD'; // purple for both
        borderColor = '#6d28d9';
        pulse = true;
      } else if (isWegovyAvailable) {
        color = items.find(i => i.id === 'wegovy')?.color || '#16a34a';
        borderColor = '#15803d';
        pulse = true;
      } else if (isMounjaroAvailable) {
        color = items.find(i => i.id === 'mounjaro')?.color || '#16a34a';
        borderColor = '#991b1b';
        pulse = true;
      } else if (wegovyStatus === 'unavailable' && mounjaroStatus === 'unavailable') {
        color = '#dc2626'; // red
        borderColor = '#b91c1c';
      }
    }
    return { color, borderColor, pulse };
  };

  const selectedClinic = clinics.find(c => c.id === selectedClinicId);

  if (!apiKey) {
    return (
        <div className="flex items-center justify-center w-full h-full bg-muted">
            <div className="text-center p-8">
                <h2 className="text-xl font-semibold">Google Maps API 키가 필요합니다</h2>
                <p className="text-muted-foreground mt-2">
                    애플리케이션에 지도를 표시하려면 .env 파일에 Google Maps API 키를 추가하세요.
                </p>
                <code className="mt-4 inline-block bg-background p-2 rounded-md text-sm">
                    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY_HERE"
                </code>
            </div>
        </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={{ lat: 37.5665, lng: 126.9780 }} // Seoul center
          defaultZoom={11}
          mapId="glp-tracker-map"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {clinics.map((clinic) => {
            const { color, borderColor, pulse } = getMarkerInfo(clinic);
            return (
              <AdvancedMarker
                key={clinic.id}
                position={clinic.location}
                onClick={() => setSelectedClinicId(clinic.id)}
              >
                <div className="relative">
                    {pulse && <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />}
                    <Pin background={color} glyphColor={"#fff"} borderColor={borderColor} />
                </div>
              </AdvancedMarker>
            );
          })}
          {selectedClinic && (
             <InfoWindow
                position={selectedClinic.location}
                onCloseClick={() => setSelectedClinicId(null)}
              >
                <div className="w-80">
                  <ClinicInfoCard clinic={selectedClinic} items={items} />
                </div>
              </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
