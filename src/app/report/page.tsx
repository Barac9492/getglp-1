
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ReportForm from '@/components/report/report-form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';
import React from 'react';
import { Suspense } from 'react';

function ReportPageContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-8 md:py-12">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline">가용성 정보 제보하기</CardTitle>
                <CardDescription>
                  최신 정보를 공유하여 커뮤니티에 기여해주세요. 모든 제보는 커뮤니티 검증을 거쳐 지도에 반영됩니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle>로그인 안내</AlertTitle>
                    <AlertDescription>
                    정보의 신뢰도를 높이기 위해 Google 계정으로 로그인해야만 제보를 등록할 수 있습니다.
                    </AlertDescription>
                </Alert>
                <ReportForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default function ReportPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReportPageContent />
        </Suspense>
    )
}
