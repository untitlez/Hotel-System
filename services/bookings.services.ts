import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { roomId, userId, checkInDate, checkOutDate } = await req.json();
    const payload = await prisma.booking.create({
      data: {
        roomId,
        userId,
        checkInDate: new Date(checkInDate),
        checkOutDate: new Date(checkOutDate),
      },
    });
    return NextResponse.json({
      message: "Booking successfully",
      data: payload,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
