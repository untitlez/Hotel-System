import { NextRequest, NextResponse } from "next/server";
import { listBooking, removeBooking } from "@/services/booking.services";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const payload = await listBooking(id);
    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await removeBooking(id);
    return NextResponse.json({ message: "Delete successfully" });
  } catch (error: unknown) {
    if ((error as { code: string }).code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
