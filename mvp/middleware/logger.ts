import { logPrefix } from "@/helper";
import { NextRequest, NextResponse } from "next/server";

export function loggerMiddleware(req: NextRequest) {
  console.log(
    `${logPrefix("info")} ${req.headers.get("X-Forwarded-For")} ${req.geo?.region || ""} ${req.method} ${
      req.destination
    } ${req.nextUrl.pathname}`,
  );
  return NextResponse.next();
}
