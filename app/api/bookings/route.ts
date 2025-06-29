import { NextRequest, NextResponse } from "next/server";

import { validateBooking } from "@/validators/booking.validator";
import { allBooking, createBooking } from "@/services/booking.services";

export async function GET(req: NextRequest) {
  try {
    const payload = await allBooking();
    return NextResponse.json(payload);
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateBooking(body);
    const payload = await createBooking(parsed);
    return NextResponse.json({
      message: "New Booking",
      data: payload,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
