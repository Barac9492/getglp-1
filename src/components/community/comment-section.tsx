
'use client';

import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, query, where, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { saveComment } from '@/app/actions/comments';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  authorPhotoURL?: string;
  content: string;
  createdAt: Timestamp;
}

interface CommentFormValues {
  comment: string;
}

export default function CommentSection({ postId }: { postId: string }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = React.useState(true);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<CommentFormValues>();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    const q = query(
      collection(db, 'comments'),
      where('postId', '==', postId),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as Comment));
      setComments(fetchedComments);
      setLoadingComments(false);
    });

    return () => unsubscribe();
  }, [postId]);

  const onSubmit: SubmitHandler<CommentFormValues> = async (data) => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: '로그인이 필요합니다',
        description: '댓글을 작성하려면 먼저 로그인해주세요.',
      });
      return;
    }

    try {
        const token = await user.getIdToken();
        // We are not using the returned result of the action, but using fetch to pass the token
        const response = await fetch('/api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ postId, content: data.comment }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            reset();
            toast({
                title: '✅ 댓글이 등록되었습니다.',
            });
        } else {
             throw new Error(result.error || 'Failed to post comment.');
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : '댓글을 등록하는 중 문제가 발생했습니다.';
        toast({
            variant: 'destructive',
            title: '❌ 오류가 발생했습니다',
            description: errorMessage,
        });
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">댓글 ({comments.length})</h3>
      
      {user ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Textarea
            {...register('comment', { required: true })}
            placeholder="댓글을 입력하세요..."
            rows={3}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            댓글 등록
          </Button>
        </form>
      ) : (
        <Alert>
            <AlertTitle>로그인 필요</AlertTitle>
            <AlertDescription>댓글을 작성하려면 로그인해주세요.</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        {loadingComments ? (
            <div className="flex items-center space-x-4">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                <p className="text-muted-foreground">댓글을 불러오는 중...</p>
            </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id} className="bg-muted/50">
              <CardContent className="p-4 flex gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.authorPhotoURL} />
                  <AvatarFallback>{comment.authorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{comment.authorName}</p>
                    <p className="text-xs text-muted-foreground">
                      {comment.createdAt?.toDate().toLocaleDateString('ko-KR')}
                    </p>
                  </div>
                  <p className="text-sm mt-1">{comment.content}</p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            아직 댓글이 없습니다. 첫 댓글을 남겨보세요!
          </p>
        )}
      </div>
    </div>
  );
}
