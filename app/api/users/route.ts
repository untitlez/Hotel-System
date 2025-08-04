import { NextRequest, NextResponse } from "next/server";
import { allUser } from "@/services/user.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search") ?? "";
    const payload = await allUser(query);
    return NextResponse.json(payload);
  } catch   {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
