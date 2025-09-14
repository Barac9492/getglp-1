
'use client';

import * as React from 'react';
import type { Clinic } from '@/lib/types';
import { APIProvider, Map, AdvancedMarker, InfoWindow, Pin, useMap } from '@vis.gl/react-google-maps';
import ClinicInfoCard from './clinic-info-card';
import { items } from '@/lib/mock-data';
import { useMedia } from 'use-media';

export type MapViewFilters = {
  product: 'wegovy' | 'mounjaro';
  region: string;
  priceRange: [number, number];
  lastUpdated: string;
  verificationStatus: string;
};

const MapContainer = ({ clinics, filters, selectedClinicId, setSelectedClinicId } : { clinics: Clinic[], filters: MapViewFilters, selectedClinicId: string | null, setSelectedClinicId: (id: string | null) => void}) => {
  const map = useMap();
  const isMobile = useMedia({ maxWidth: '767px' });
  const selectedClinic = clinics.find(c => c.id === selectedClinicId);

  React.useEffect(() => {
    if (map && selectedClinic) {
      map.panTo({lat: selectedClinic.location.latitude, lng: selectedClinic.location.longitude});
    }
  }, [map, selectedClinic]);

  const getMarkerInfo = (clinic: Clinic) => {
    const { product } = filters;
    const status = clinic.status[product];
    
    let color = 'hsl(var(--muted-foreground))'; // gray (unknown)
    let borderColor = 'hsl(var(--muted-foreground))';
    let pulse = false;

    if (status === 'available') {
      color = 'hsl(var(--primary))';
      borderColor = 'hsl(var(--primary))';
      pulse = true;
    } else if (status === 'unavailable') {
      color = 'hsl(var(--destructive))'; // red
      borderColor = 'hsl(var(--destructive))';
    }
    
    return { color, borderColor, pulse };
  };

  return (
    <>
      {clinics.map((clinic) => {
        const { color, borderColor, pulse } = getMarkerInfo(clinic);
        const position = {lat: clinic.location.latitude, lng: clinic.location.longitude};
        return (
          <AdvancedMarker
            key={clinic.id}
            position={position}
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
            position={{lat: selectedClinic.location.latitude, lng: selectedClinic.location.longitude}}
            onCloseClick={() => setSelectedClinicId(null)}
            pixelOffset={isMobile ? [0, -40] : [0,-10]}
          >
            <div className="w-80">
              <ClinicInfoCard clinic={selectedClinic} items={items} />
            </div>
          </InfoWindow>
      )}
    </>
  )
}

export default function MapView({ clinics, filters }: { clinics: Clinic[]; filters: MapViewFilters }) {
  const [selectedClinicId, setSelectedClinicId] = React.useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    return (
        <div className="flex items-center justify-center w-full h-full bg-muted">
            <div className="text-center p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold font-headline mb-4">Google Maps API 키가 필요합니다</h2>
                <p className="text-muted-foreground mb-6">
                    애플리케이션에 지도를 표시하려면 <code className="font-code bg-background px-1.5 py-1 rounded">.env.local</code> 파일에 유효한 Google Maps API 키를 추가해야 합니다.
                </p>
                <div className="text-left bg-background p-4 rounded-lg border">
                    <p className="text-sm font-medium mb-2">단계:</p>
                    <ol className="list-decimal list-inside text-sm space-y-2">
                        <li>Google Cloud Console에서 API 키를 생성하거나 기존 키를 사용하세요.</li>
                        <li>"Maps JavaScript API"가 활성화되어 있는지 확인하세요.</li>
                        <li>프로젝트 루트에 <code className="font-code bg-muted px-1 py-0.5 rounded">.env.local</code> 파일을 생성하세요.</li>
                        <li>파일에 다음 내용을 추가하고 <code className="font-code bg-muted px-1 py-0.5 rounded">YOUR_API_KEY_HERE</code>를 실제 키로 바꾸세요:</li>
                    </ol>
                    <code className="mt-4 block bg-muted p-2 rounded-md text-sm w-full overflow-x-auto">
                        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY_HERE"
                    </code>
                </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    키를 추가한 후에는 개발 서버를 재시작해야 변경사항이 적용됩니다.
                </p>
            </div>
        </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={{ lat: 37.5665, lng: 126.9780 }} // Seoul center
          defaultZoom={10}
          mapId="glp-tracker-map"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          onClick={() => setSelectedClinicId(null)}
        >
          <MapContainer clinics={clinics} filters={filters} selectedClinicId={selectedClinicId} setSelectedClinicId={setSelectedClinicId} />
        </Map>
      </APIProvider>
    </div>
  );
}
