import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { communityPosts } from '@/lib/mock-data';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Clock, User, ShieldAlert, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '커뮤니티',
  description: '위고비, 마운자로 사용자들이 경험과 팁을 나누는 공간입니다. 식단, 운동, 부작용 관리 등 다양한 주제에 대해 이야기해보세요.',
  alternates: {
    canonical: '/community',
  },
};

export default function CommunityPage() {
  const sortedPosts = communityPosts.sort((a,b) => b._date.getTime() - a._date.getTime());

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">커뮤니티</h1>
                <p className="text-muted-foreground mt-2">사용자들과 함께 경험과 팁을 공유하고 궁금한 점을 질문해보세요.</p>
            </div>
            
            <Alert className="mb-8 border-yellow-500/50 text-yellow-700 [&>svg]:text-yellow-500 bg-yellow-50">
                <ShieldAlert className="h-4 w-4" />
                <AlertTitle className="font-bold">법적 고지 및 주의사항</AlertTitle>
                <AlertDescription>
                    본 커뮤니티의 모든 내용은 사용자들이 자발적으로 공유한 정보이며, 의학적 조언을 대체할 수 없습니다. 건강 관련 결정은 반드시 의료 전문가와 상의하시기 바랍니다. 서비스 제공자는 게시된 정보의 정확성이나 신뢰성에 대해 어떠한 책임도 지지 않습니다.
                </AlertDescription>
            </Alert>
            
            <div className="space-y-4">
                {sortedPosts.map(post => (
                    <Card key={post.id}>
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                            <CardTitle className="text-lg pt-2">{post.title}</CardTitle>
                             <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                                <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
                                <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{new Date(post.createdAt).toLocaleDateString('ko-KR')}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground line-clamp-2">{post.content}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4" /> {post.votes}</span>
                                <span className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {post.commentsCount}</span>
                            </div>
                             <Link href={`/community/${post.id}`} passHref>
                                <Button variant="secondary" size="sm">
                                    더 보기 <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
