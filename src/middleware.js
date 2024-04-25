import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  const token = await getToken({ req, secret: "indonesia1234" });
  const { pathname } = req.nextUrl;

  // Memeriksa apakah pengguna sudah memiliki token saat mengakses halaman login
  if (pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/spd', req.url));
  }



  // Memeriksa apakah pengguna mencoba mengakses halaman yang membutuhkan autentikasi tanpa token
  if (!pathname.startsWith('/login') && !token && !pathname.startsWith('/api/auth')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/spd/:path*', '/kepegawaian/:path*', '/login'],
  };