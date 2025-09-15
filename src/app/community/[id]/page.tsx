import * as React from 'react';
import { communityPosts } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CommentSection from '@/components/community/comment-section';
import type { Metadata, NextPage } from 'next';

type Props = {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = communityPosts.find(p => p.id === params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150),
    alternates: {
      canonical: `/community/${post.id}`,
    },
  };
}

const CommunityPostPage: NextPage<Props> = ({ params }) => {
  const post = communityPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('ko-KR');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
             <div className="mb-4">
                <Link href="/community" passHref>
                    <Button variant="outline" size="sm" className="gap-1">
                        <ArrowLeft className="h-4 w-4" />
                        목록으로 돌아가기
                    </Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">{post.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                        <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {formattedDate}
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground/90 leading-relaxed">
                   <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-muted/50 py-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 font-semibold"><ThumbsUp className="h-4 w-4" /> {post.votes} Votes</span>
                        <span className="flex items-center gap-1 font-semibold"><MessageSquare className="h-4 w-4" /> {post.commentsCount} Comments</span>
                    </div>
                </CardFooter>
            </Card>

            <div className="mt-8">
                <CommentSection postId={post.id} />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CommunityPostPage;
