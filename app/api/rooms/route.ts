import { NextRequest, NextResponse } from "next/server";

import { validateRoom } from "@/validators/room.validator";
import { createRoom, queryRoom } from "@/services/room.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search") || "";
    const payload = await queryRoom(query);
    return NextResponse.json(
      {
        success: true,
        data: payload,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateRoom(body);
    const payload = await createRoom(parsed);
    return NextResponse.json(
      {
        success: true,
        message: "Create Successfully!",
        data: payload,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error,
      },
      { status: 500 }
    );
  }
}
