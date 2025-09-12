'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown, Flag, User, Clock, Phone, CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Report } from '@/lib/types';
import { items } from '@/lib/mock-data';

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

interface ReportCardProps {
    report: Report;
}

export default function ReportCard({ report }: ReportCardProps) {
    const item = items.find(i => i.id === report.item);
    
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{report.clinicName}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full" style={{backgroundColor: item?.color}} />{item?.displayNameKo}</span>
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
                        {report.availability === 'available' ? '재고 있음' : '재고 없음'}
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
}
