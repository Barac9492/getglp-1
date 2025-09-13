
'use client';

import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import type { CommunityPost } from '@/lib/types';
import { deletePost } from '@/app/actions/posts';

interface PostsTableProps {
  initialPosts: CommunityPost[];
}

export function PostsTable({ initialPosts }: PostsTableProps) {
  const [posts, setPosts] = React.useState(initialPosts);
  const { toast } = useToast();

  const handleDelete = async (postId: string) => {
    if (!confirm('정말로 이 게시물을 삭제하시겠습니까?')) return;
    const result = await deletePost(postId);
    if (result.success) {
      setPosts(posts.filter(p => p.id !== postId));
      toast({ title: '🗑️ 게시물이 삭제되었습니다.' });
    } else {
      toast({ variant: 'destructive', title: '❌ 삭제에 실패했습니다.', description: result.error });
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>제목</TableHead>
            <TableHead>작성자</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead>작성일</TableHead>
            <TableHead><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{new Date(post.createdAt).toLocaleDateString()}</TableCell>
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
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(post.id)}>
                        게시물 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
