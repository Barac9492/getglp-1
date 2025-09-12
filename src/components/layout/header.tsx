'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Map, Syringe, User, LogOut, Settings, HelpCircle, List, Edit, MessageSquare } from 'lucide-react';

const Logo = () => (
    <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
        <Syringe className="h-6 w-6" />
        <span className="font-headline">GLP 트래커</span>
    </Link>
)

const navLinks = [
  { href: '/', label: '지도', icon: <Map className="h-4 w-4" /> },
  { href: '/queue', label: '제보 목록', icon: <List className="h-4 w-4" /> },
  { href: '/community', label: '커뮤니티', icon: <MessageSquare className="h-4 w-4" /> },
  { href: '/guide', label: '이용 안내', icon: <HelpCircle className="h-4 w-4" /> },
];

const UserNav: React.FC<{ isLoggedIn: boolean; onAuthChange: (loggedIn: boolean) => void }> = ({ isLoggedIn, onAuthChange }) => {
  if (!isLoggedIn) {
    return (
      <Button onClick={() => onAuthChange(true)}>로그인</Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://picsum.photos/seed/user/40/40" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">사용자</p>
            <p className="text-xs leading-none text-muted-foreground">
              user@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>내 제보</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onAuthChange(false)}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Logo />
                </div>
                <nav className="flex items-center gap-4 text-sm font-medium flex-1">
                    {navLinks.map(link => (
                         <Link key={link.href} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground/80 hidden md:inline-block">{link.label}</Link>
                    ))}
                </nav>

                <div className="flex flex-1 items-center justify-end space-x-4">
                     <Link href="/report" passHref>
                        <Button>
                          <Edit className="mr-2 h-4 w-4" />
                          정보 제보하기
                        </Button>
                    </Link>
                    <UserNav isLoggedIn={isLoggedIn} onAuthChange={setIsLoggedIn} />
                </div>
            </div>
        </header>
    )
}
