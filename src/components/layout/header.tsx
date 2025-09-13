
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
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

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

const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error: any) {
        // These errors are commonly triggered when the user closes the popup.
        // We can safely ignore them.
        if (error.code !== 'auth/cancelled-popup-request' && error.code !== 'auth/popup-closed-by-user') {
            console.error("Error signing in with Google", error);
        }
    }
};

const handleSignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out", error);
    }
};


const UserNav: React.FC<{ user: FirebaseUser | null }> = ({ user }) => {
  if (!user) {
    return (
      <Button onClick={handleSignIn}>로그인</Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
            <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
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
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Header() {
    const [user, setUser] = React.useState<FirebaseUser | null>(auth.currentUser);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);


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
                        <Button variant="outline" size="sm" className="hidden md:inline-flex">
                          <Edit className="mr-2 h-4 w-4" />
                          정보 제보하기
                        </Button>
                    </Link>
                    <UserNav user={user} />
                </div>
            </div>
        </header>
    )
}
