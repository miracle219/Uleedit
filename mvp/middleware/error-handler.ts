import { logPrefix } from "@/helper";
import { NextRequest, NextResponse } from "next/server";

export function errorHandlerMiddleware(req: NextRequest) {
  try {
    // Pass through to the next middleware
    return NextResponse.next();
  } catch (error: any) {
    console.error(
      logPrefix("error", "middleware.error"),
      "Error occurred:",
      error.message,
    );
    return new NextResponse("An error occurred", { status: 500 });
  }
}
