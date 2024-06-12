import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;

  const { searchParams } = new URL(request.url);
  const result = [{ id: searchParams.get("id") || 1, title: "text" }];
  return Response.json(result);
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json(data);
}

export async function PUT(request: Request) {
  return Response.json("PUT METHOD!");
}

export async function PATCH(request: Request) {
  return Response.json("PATCH METHOD!");
}

export async function DELETE(request: Request) {
  return Response.json("DELETE METHOD!");
}
