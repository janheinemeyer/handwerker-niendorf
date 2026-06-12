import { NextResponse, type NextRequest } from "next/server";
import { isValidSession, SESSION_COOKIE } from "@/lib/admin-auth";

// Guards the admin area: anything under /admin (except the login page) requires
// a valid session cookie, otherwise redirect to the login page.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (await isValidSession(token)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/admin/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
