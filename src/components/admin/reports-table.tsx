
'use client';

import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, CheckCircle, XCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import type { Report } from '@/lib/types';
import { verifyReport, deleteReport } from '@/app/actions/reports';
import { items } from '@/lib/mock-data';

interface ReportsTableProps {
  initialReports: Report[];
}

export function ReportsTable({ initialReports }: ReportsTableProps) {
  const [reports, setReports] = React.useState(initialReports);
  const { toast } = useToast();

  const handleVerification = async (reportId: string, status: 'admin-verified' | 'unverified') => {
    const result = await verifyReport(reportId, status);
    if (result.success) {
      setReports(reports.map(r => r.id === reportId ? { ...r, verification: status } : r));
      toast({ title: '✅ 제보 상태가 업데이트되었습니다.' });
    } else {
      toast({ variant: 'destructive', title: '❌ 업데이트에 실패했습니다.', description: result.error });
    }
  };
  
  const handleDelete = async (reportId: string) => {
    if (!confirm('정말로 이 제보를 삭제하시겠습니까?')) return;
    const result = await deleteReport(reportId);
    if (result.success) {
      setReports(reports.filter(r => r.id !== reportId));
      toast({ title: '🗑️ 제보가 삭제되었습니다.' });
    } else {
      toast({ variant: 'destructive', title: '❌ 삭제에 실패했습니다.', description: result.error });
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>클리닉</TableHead>
            <TableHead>제품</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>제보자</TableHead>
            <TableHead>검증</TableHead>
            <TableHead><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => {
             const item = items.find(i => i.id === report.item);
            return (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.clinicName}</TableCell>
              <TableCell>{item?.displayNameKo}</TableCell>
              <TableCell>
                <Badge variant={report.availability === 'available' ? 'default' : 'destructive'} style={report.availability === 'available' ? {backgroundColor: item?.color} : {}}>
                    {report.availability === 'available' ? '재고 있음' : '재고 없음'}
                </Badge>
              </TableCell>
              <TableCell>{report.reportedBy}</TableCell>
              <TableCell>{report.verification}</TableCell>
              <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>작업</DropdownMenuLabel>
                      {report.verification !== 'admin-verified' && 
                        <DropdownMenuItem onClick={() => handleVerification(report.id, 'admin-verified')}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          관리자 검증으로 표시
                        </DropdownMenuItem>
                      }
                      {report.verification === 'admin-verified' && 
                        <DropdownMenuItem onClick={() => handleVerification(report.id, 'unverified')}>
                          <XCircle className="mr-2 h-4 w-4" />
                          검증 취소
                        </DropdownMenuItem>
                      }
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(report.id)}>
                        제보 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </div>
  );
}
