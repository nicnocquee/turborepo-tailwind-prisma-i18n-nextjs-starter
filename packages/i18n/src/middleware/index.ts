import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "../settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const cookieName = "i18next";

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(cookieName)) {
    console.log(`middlware: has cookie`);
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  }
  if (!lng) {
    console.log(`no cookie, try headers`);
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  if (!lng) {
    console.log(`no in headers, fallback lang`);
    lng = fallbackLng;
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    console.log(`the lang in param is not supported, redirecting to ${lng}`);
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    console.log(`has referer`);
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    console.log(`lngInReferer is ${lngInReferer}`);
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
    return response;
  }

  console.log(`continue as normal ${lng}`);

  return NextResponse.next();
}
