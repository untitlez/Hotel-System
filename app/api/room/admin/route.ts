import { NextRequest, NextResponse } from "next/server";
import { getAllRoom } from "@/services/room.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search") ?? "";
    const payload = await getAllRoom(query);
    return NextResponse.json(payload);
  } catch   {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
