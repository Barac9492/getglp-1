import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container py-4 text-center text-xs text-muted-foreground">
        <div className="mb-2 space-y-1">
            <p className="font-bold">
            “본 서비스는 정보 제공을 위한 크라우드소싱 플랫폼입니다. 의료행위/처방/구매 유도가 아니며, 정보의 정확성·최신성·완전성을 보장하지 않습니다."
            </p>
            <p>
            "실제 취급 여부·가격·재고는 수시로 변경될 수 있으므로 방문 전 반드시 해당 기관에 직접 확인하시기 바랍니다. 건강 관련 결정은 의료 전문가와 상담하십시오.”
            </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p>
            &copy; {new Date().getFullYear()} GLP 트래커 — 서울/분당/동탄 베타
            </p>
            <div className="flex items-center gap-2">
                <Link href="/guide" className="hover:text-primary">이용 안내 / 법적 고지</Link>
                <span className="hidden sm:inline">&bull;</span>
                <p>데이터는 사용자 제보 기반으로 수집됩니다.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
