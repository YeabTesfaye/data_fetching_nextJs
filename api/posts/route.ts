import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(request);
  const articles = [{ id: 1, title: "Next.js Route Handler Example" }];

  return NextResponse.json(articles);
}
