"use server";
import { NextRequest, NextResponse } from "next/server";
import { loggerMiddleware } from "./middleware/logger";
import { errorHandlerMiddleware } from "./middleware/error-handler";

export function middleware(req: NextRequest) {
  let res = loggerMiddleware(req);

  if (res && res instanceof NextResponse) {
    return res;
  }

  res = errorHandlerMiddleware(req);

  if (res && res instanceof NextResponse) {
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      locale: false,
    },
  ],
};
