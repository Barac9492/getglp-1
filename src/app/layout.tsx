import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'GLP 트래커',
  description: '서울/분당/동탄 지역 GLP-1 의약품(위고비, 마운자로) 가용성 지도',
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
