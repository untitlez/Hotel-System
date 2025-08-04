import { NextRequest, NextResponse } from "next/server";

import { validateCreateBooking } from "@/validators/booking.validator";
import { allBooking, createBooking } from "@/services/booking.services";

export async function GET() {
  try {
    const payload = await allBooking();
    return NextResponse.json(payload);
  } catch   {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateCreateBooking(body);
    const payload = await createBooking(parsed);
    return NextResponse.json(
      {
        message: "Created successfully",
        payload,
      },
      { status: 201 },
    );
  } catch   {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
