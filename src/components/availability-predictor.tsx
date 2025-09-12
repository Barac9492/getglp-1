'use client';

import { useState } from 'react';
import { predictAvailability, PredictAvailabilityOutput } from '@/ai/flows/availability-prediction';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Clinic, ItemId } from '@/lib/types';
import { Loader2, Wand2 } from 'lucide-react';
import { items } from '@/lib/mock-data';

export function AvailabilityPredictor({ clinic, item }: { clinic: Clinic, item: ItemId }) {
  const [prediction, setPrediction] = useState<PredictAvailabilityOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const itemName = items.find(i => i.id === item)?.displayNameKo || item;

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setPrediction(null);
    try {
      const result = await predictAvailability({
        clinicName: clinic.name,
        itemName: itemName,
        historicalData: `지난 3개월간 재고 변동 ${Math.random() > 0.5 ? '많음' : '적음'}.`,
        userReports: `최근 1주일 내 재고 ${Math.random() > 0.5 ? '소진' : '입고'} 보고 ${Math.floor(Math.random()*3)}건.`,
        regionalTrends: `인근 지역 공급 ${Math.random() > 0.5 ? '부족' : '원활'} 현상 있음.`,
      });
      setPrediction(result);
    } catch (e) {
      setError('AI 예측에 실패했습니다. 다시 시도해주세요.');
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <Button variant="ghost" size="sm" onClick={handlePredict} disabled={loading} className="w-full justify-start gap-2 text-primary hover:text-primary">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="h-4 w-4" />
        )}
        <span>{itemName} 재고 예측하기</span>
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {prediction && (
        <Card className="bg-secondary">
          <CardContent className="p-4 text-sm">
            <p>
              <span className="font-bold">예측 가용성:</span>{' '}
              <span className="font-mono font-bold text-primary">{(prediction.probabilityScore * 100).toFixed(0)}%</span>
            </p>
            <p className="text-muted-foreground mt-1">
              <span className="font-bold">AI 분석:</span> {prediction.reasoning}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
