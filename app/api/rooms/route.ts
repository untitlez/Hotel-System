import { NextRequest, NextResponse } from "next/server";

import { validateRoom } from "@/validators/room.validator";
import { createRoom, queryRoom } from "@/services/room.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search") || "";
    const payload = await queryRoom(query);
    return NextResponse.json(payload);
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateRoom(body);
    const payload = await createRoom(parsed);
    return NextResponse.json({
      message: "Created successfully",
      data: payload,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
