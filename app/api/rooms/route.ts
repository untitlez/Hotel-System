import { NextRequest, NextResponse } from "next/server";

import { validateCreateRoom } from "@/validators/room.validator";
import { createRoom, queryRoom } from "@/services/room.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search") || "";
    const payload = await queryRoom(query);
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateCreateRoom(body);
    const payload = await createRoom(parsed);
    return NextResponse.json(
      {
        message: "Created successfully",
        payload,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
