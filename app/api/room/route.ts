import { NextRequest, NextResponse } from "next/server";

import { validateCreateRoom } from "@/validators/room.validator";
import { createRoom } from "@/services/room.services";

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
