import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteName = 'GLP 트래커';
const description = '서울, 분당, 동탄 지역 GLP-1 다이어트 주사(위고비, 마운자로)의 재고 현황과 가격 정보를 실시간으로 확인하세요. 사용자 제보 기반 가용성 지도.';
// TODO: Replace this with your actual domain once you have it connected.
const url = 'https://glp-tracker.firebaseapp.com'; 

export const metadata: Metadata = {
  title: {
    default: `${siteName} | 위고비/마운자로 재고 지도`,
    template: `%s | ${siteName}`,
  },
  description: description,
  openGraph: {
    title: {
      default: `${siteName} | 위고비/마운자로 재고 지도`,
      template: `%s | ${siteName}`,
    },
    description: description,
    url: url,
    siteName: siteName,
    images: [
      {
        url: `${url}/og-image.png`, // TODO: Add an OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${siteName} | 위고비/마운자로 재고 지도`,
      template: `%s | ${siteName}`,
    },
    description: description,
    images: [`${url}/og-image.png`], // TODO: Add an OG image
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ['GLP-1', '위고비', '마운자로', '다이어트 주사', '재고', '가격', '지도', '서울', '분당', '동탄', 'wegovy', 'mounjaro'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
