
'use client';

import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { UserView, updateUserRole, deleteUser } from '@/app/actions/admin';

interface UsersTableProps {
  initialUsers: UserView[];
  currentUserRole: 'admin' | 'superadmin';
}

const roleVariant: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  superadmin: 'destructive',
  admin: 'default',
  user: 'secondary',
};

export function UsersTable({ initialUsers, currentUserRole }: UsersTableProps) {
  const [users, setUsers] = React.useState(initialUsers);
  const { toast } = useToast();

  const handleRoleChange = async (uid: string, newRole: 'admin' | 'user') => {
    const result = await updateUserRole(uid, newRole);
    if (result.success) {
      setUsers(users.map(u => u.uid === uid ? { ...u, role: newRole } : u));
      toast({ title: '✅ 역할이 변경되었습니다.' });
    } else {
      toast({ variant: 'destructive', title: '❌ 역할 변경에 실패했습니다.', description: result.error });
    }
  };

  const handleDeleteUser = async (uid: string) => {
    if (!confirm('정말로 이 사용자를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;
    const result = await deleteUser(uid);
    if (result.success) {
      setUsers(users.filter(u => u.uid !== uid));
      toast({ title: '🗑️ 사용자가 삭제되었습니다.' });
    } else {
      toast({ variant: 'destructive', title: '❌ 사용자 삭제에 실패했습니다.', description: result.error });
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이메일</TableHead>
            <TableHead>이름</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>마지막 로그인</TableHead>
            <TableHead><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.uid}>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell>{user.displayName || 'N/A'}</TableCell>
              <TableCell>
                <Badge variant={roleVariant[user.role]}>{user.role}</Badge>
              </TableCell>
              <TableCell>{new Date(user.metadata.lastSignInTime!).toLocaleDateString()}</TableCell>
              <TableCell>
                {currentUserRole === 'superadmin' && user.role !== 'superadmin' && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>작업</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleRoleChange(user.uid, user.role === 'admin' ? 'user' : 'admin')}>
                        {user.role === 'admin' ? '사용자로 강등' : '관리자로 승격'}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteUser(user.uid)}>
                        사용자 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
