'use server';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getApps, initializeApp, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Add known bot user agents to this list
const BOT_USER_AGENTS = [
    'googlebot',
    'bingbot',
    'yahoo! slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'sogou',
    'exabot',
    'facebot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'google-read-aloud',
    'gptbot',
    'google-extended',
    'anthropic-ai',
    'petalbot',
    'omgilibot',
    'omgili',
    'cohere-ai',
    'bytespider',
    'ccbot',
    'adidxbot'
];

// Initialize Firebase Admin SDK if not already initialized
if (getApps().length === 0) {
  initializeApp();
}
const db = getFirestore();

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // Check if the user agent is a known bot
  const isBot = BOT_USER_AGENTS.some(bot => userAgent.includes(bot));

  if (isBot) {
    try {
      // Asynchronously log bot visit to Firestore without blocking the request
      const logPromise = db.collection('bot_scrapes').add({
        url: request.nextUrl.pathname,
        userAgent: userAgent,
        timestamp: new Date(),
        ip: request.ip,
        headers: JSON.stringify(Object.fromEntries(request.headers.entries())),
      });
      // We don't await this promise to avoid delaying the response.
      // This is a "fire-and-forget" operation.
      logPromise.catch(console.error);

    } catch (error) {
      console.error('Error logging bot scrape to Firestore:', error);
    }
  }

  // Continue with the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
