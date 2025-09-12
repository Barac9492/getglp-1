
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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


export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // Check if the user agent is a known bot
  const isBot = BOT_USER_AGENTS.some(bot => userAgent.includes(bot));

  if (isBot) {
    // NOTE: Logging bot visits to a database from middleware requires an Edge-compatible
    // database client or sending a request to a serverless function.
    // The previous implementation using firebase-admin was causing a runtime error.
    // For now, we are only detecting the bot without logging.
    console.log(`Bot detected: ${userAgent}, URL: ${request.nextUrl.pathname}`);
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
