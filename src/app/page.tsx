
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MapPin, Edit, Users } from 'lucide-react';
import { communityPosts } from '@/lib/mock-data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');
  const latestPosts = communityPosts.sort((a,b) => b._date.getTime() - a._date.getTime()).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary/30 py-20 md:py-32">
             {mapImage && (
                <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover object-center opacity-10"
                    data-ai-hint={mapImage.imageHint}
                />
            )}
          <div className="container mx-auto text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
              GLP-1 재고, 이제 찾아다니지 마세요.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              서울, 분당, 동탄 지역의 위고비·마운자로 재고 현황과 가격 정보를 사용자들이 직접 공유하는 실시간 지도로 확인하고, 커뮤니티에서 경험을 나누세요.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/map" passHref>
                <Button size="lg" className="gap-2">
                  <MapPin />
                  실시간 재고 지도 보기
                </Button>
              </Link>
              <Link href="/report" passHref>
                <Button size="lg" variant="outline" className="gap-2">
                  <Edit />
                  정보 제보하기
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">실시간 재고 지도</h3>
                <p className="text-muted-foreground">사용자 제보를 바탕으로 한 위고비·마운자로 재고 및 가격 정보를 지도로 한눈에 파악하세요.</p>
              </div>
              <div className="flex flex-col items-center">
                <Edit className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">정보 제보 및 검증</h3>
                <p className="text-muted-foreground">최신 정보를 제보하여 커뮤니티에 기여하고, 다른 사용자의 제보를 함께 검증하여 신뢰도를 높여요.</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">사용자 커뮤니티</h3>
                <p className="text-muted-foreground">식단, 운동, 부작용 관리 등 유용한 팁과 경험을 다른 사용자들과 자유롭게 나누세요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-headline">최신 커뮤니티 글</h2>
              <Link href="/community" passHref>
                <Button variant="ghost">
                  더 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map(post => (
                <Card key={post.id} className="flex flex-col">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                    <CardTitle className="text-lg pt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4" />{post.votes}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="h-4 w-4" />{post.commentsCount}</span>
                    </div>
                     <Link href={`/community/${post.id}`} className="text-primary hover:underline">
                      읽어보기
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
