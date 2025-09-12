import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용 안내 및 법적 고지',
  description: 'GLP 트래커 서비스의 이용 안내, 면책 조항, 개인정보 처리방침 및 법적 고지에 대해 알아보세요.',
  alternates: {
    canonical: '/guide',
  },
};

export default function GuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-headline">이용 안내 및 법적 고지</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground/80 leading-relaxed">
                <div className="space-y-2 p-4 border-l-4 border-destructive bg-destructive/10 rounded-r-lg">
                  <h3 className="font-bold text-lg text-destructive-foreground">중요 면책 조항</h3>
                  <p className="font-semibold">
                    본 서비스는 정보 제공을 위한 크라우드소싱 플랫폼입니다. 의료행위, 처방, 또는 의약품 구매 유도를 목적으로 하지 않으며, 제공되는 정보의 정확성, 최신성, 완전성을 보장하지 않습니다.
                  </p>
                  <p className="font-semibold">
                    실제 클리닉의 취급 여부, 가격, 재고는 수시로 변경될 수 있습니다. 방문 전 반드시 해당 의료 기관에 직접 전화 등으로 확인하시기 바랍니다. 건강 관련 모든 결정은 반드시 의료 전문가와 상담 후 내리셔야 합니다.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">사용자 제보 정책</h3>
                  <p>
                    사용자 제보는 시스템에 의해 익명성이 보장되나, 명백한 허위 제보, 타인의 명예훼손, 불법 광고 등 운영 정책에 위배되는 내용은 사전 통보 없이 삭제될 수 있으며, 해당 사용자는 서비스 이용에 제한을 받을 수 있습니다.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-lg">의약품 거래 금지</h3>
                  <p>
                    본 서비스는 처방 의약품의 온라인 판매, 중개, 알선 등 일체의 관련 행위를 하지 않으며, 사용자 간의 어떠한 금전 거래도 지원하지 않습니다. 의약품의 구매는 반드시 적법한 절차에 따라 의사의 처방을 받아 약국을 통해 이루어져야 합니다.
                  </p>
                </div>
                
                 <div className="space-y-2">
                  <h3 className="font-bold text-lg">데이터 수집 및 이용</h3>
                  <p>
                    GLP 트래커는 사용자들이 자발적으로 제공하는 정보를 집계하여 보여줍니다. 서비스 개선 및 통계 분석을 위해 비식별화된 데이터를 활용할 수 있습니다.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
