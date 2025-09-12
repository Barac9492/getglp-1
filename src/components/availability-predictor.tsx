'use client';

import { useState, useEffect } from 'react';
import { predictAvailability, PredictAvailabilityOutput } from '@/ai/flows/availability-prediction';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Clinic, ItemId, Report } from '@/lib/types';
import { Loader2, Wand2 } from 'lucide-react';
import { items, clinics as allClinics } from '@/lib/mock-data';
import { differenceInDays } from 'date-fns';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

export function AvailabilityPredictor({ clinic, item }: { clinic: Clinic, item: ItemId }) {
  const [prediction, setPrediction] = useState<PredictAvailabilityOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [firestoreReports, setFirestoreReports] = useState<Report[]>([]);

  const itemName = items.find(i => i.id === item)?.displayNameKo || item;

  useEffect(() => {
    const reportsCollection = collection(db, 'reports');
    const q = query(
      reportsCollection,
      where('clinicId', '==', clinic.id),
      where('item', '==', item),
      orderBy('reportedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reports = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          _date: data.reportedAt?.toDate() || new Date(),
          reportedAt: data.reportedAt?.toDate()?.toISOString() || new Date().toISOString(),
        } as Report;
      });
      setFirestoreReports(reports);
    });

    return () => unsubscribe();
  }, [clinic.id, item]);

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setPrediction(null);
    try {
      // Admin-provided data for the specific clinic and item
      const adminReport: Report[] = allClinics
        .filter(c => c.id === clinic.id && c.status[item] !== 'unknown')
        .map(c => ({
          id: `admin-${c.id}-${item}`,
          clinicId: c.id,
          clinicName: c.name,
          item: item,
          availability: c.status[item],
          priceKRW: c.price[item],
          reportedAt: c.lastUpdated,
          _date: new Date(c.lastUpdated),
          reportedBy: 'admin',
          sourceType: 'other' as const,
          verification: 'admin-verified' as const,
          votes: 999,
        }));

      const allClinicReports = [...firestoreReports, ...adminReport];
      const sortedReports = allClinicReports.sort((a, b) => b._date.getTime() - a._date.getTime());

      const historicalData = sortedReports.map(r => `${r.reportedAt.split('T')[0]}: ${r.availability}`).join(', ');
      
      const userReports = sortedReports.map(r => {
        const daysAgo = differenceInDays(new Date(), r._date);
        return `Report from ${daysAgo} days ago (${r.verification}, ${r.votes} votes): ${r.availability} ${r.priceKRW ? `for ${r.priceKRW.toLocaleString()} KRW` : ''}`;
      }).join('; ');

      const result = await predictAvailability({
        clinicName: clinic.name,
        itemName: itemName,
        historicalData: historicalData || 'No historical data available.',
        userReports: userReports || 'No recent user reports.',
        regionalTrends: `Supply in ${clinic.district} is currently uncertain.`,
      });
      setPrediction(result);
    } catch (e) {
      setError('AI 예측에 실패했습니다. 잠시 후 다시 시도해주세요.');
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <Button variant="outline" size="sm" onClick={handlePredict} disabled={loading} className="w-full justify-start gap-2 text-primary border-primary/50 hover:bg-primary/5 hover:text-primary">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="h-4 w-4" />
        )}
        <span>{itemName} 재고 AI 예측</span>
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {prediction && (
        <Card className="bg-secondary/50">
          <CardContent className="p-4 text-sm">
            <p>
              <span className="font-bold text-primary">AI 예측:</span>{' '}
              <span className="font-mono font-bold text-primary">{(prediction.probabilityScore * 100).toFixed(0)}% 확률로 재고 있음</span>
            </p>
            <p className="text-muted-foreground mt-1">
              <span className="font-semibold">근거:</span> {prediction.reasoning}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
