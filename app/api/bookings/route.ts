import { NextRequest, NextResponse } from "next/server";

import { validateBooking } from "@/validators/booking.validator";
import { allBooking, createBooking } from "@/services/booking.services";

export async function GET(req: NextRequest) {
  try {
    const payload = await allBooking();
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
    const parsed = validateBooking(body);
    const payload = await createBooking(parsed);
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
