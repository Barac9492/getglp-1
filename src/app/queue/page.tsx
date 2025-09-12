import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { reports, items, clinics } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown, Flag, User, Clock, MessageSquare, Phone, Building, Tag, CheckCircle, HelpCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const verificationIcon = {
    'unverified': <HelpCircle className="h-4 w-4 text-yellow-500" />,
    'community-verified': <CheckCircle className="h-4 w-4 text-blue-500" />,
    'admin-verified': <CheckCircle className="h-4 w-4 text-green-500" />
}

const verificationText = {
    'unverified': '미검증',
    'community-verified': '커뮤니티 검증',
    'admin-verified': '관리자 검증'
}

export default function QueuePage() {
    const sortedReports = [...reports].sort((a,b) => b._date.getTime() - a._date.getTime());

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">제보 목록 / 검증 큐</h1>
                <p className="text-muted-foreground mt-2">최신 제보를 확인하고 투표하여 정보의 신뢰도를 높여주세요.</p>
            </div>
            
            <div className="space-y-4">
                {sortedReports.map(report => {
                    const item = items.find(i => i.id === report.item);
                    return (
                        <Card key={report.id}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{report.clinicName}</CardTitle>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                            <span className="flex items-center gap-1"><Tag className="h-3 w-3" />{item?.displayNameKo}</span>
                                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{new Date(report.reportedAt).toLocaleString('ko-KR')}</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="flex items-center gap-1">
                                        {verificationIcon[report.verification]}
                                        {verificationText[report.verification]}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4">
                                    <Badge variant={report.availability === 'available' ? 'default' : 'destructive'} style={report.availability === 'available' ? {backgroundColor: item?.color} : {}}>
                                        {report.availability === 'available' ? '가용' : '비가용'}
                                    </Badge>
                                    {report.priceKRW && (
                                        <p className="font-semibold text-lg">{report.priceKRW.toLocaleString()}원</p>
                                    )}
                                </div>
                                {report.note && (
                                    <blockquote className="mt-4 border-l-2 pl-4 italic text-muted-foreground">"{report.note}"</blockquote>
                                )}
                                <div className="text-xs text-muted-foreground mt-4 flex items-center gap-4">
                                    <span className="flex items-center gap-1"><User className="h-3 w-3"/>제보자: {report.reportedBy}</span>
                                    <span className="flex items-center gap-1"><Phone className="h-3 w-3"/>출처: {report.sourceType}</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm" className="gap-1">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span>신뢰 ({report.votes})</span>
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-1">
                                        <ThumbsDown className="h-4 w-4" />
                                        <span>의심</span>
                                    </Button>
                                </div>
                                <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                                    <Flag className="h-4 w-4" /> 신고
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
