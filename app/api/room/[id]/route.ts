import { NextRequest, NextResponse } from "next/server";

import { validateUpdateRoom } from "@/validators/room.validator";
import { listRoom, removeRoom, updateRoom } from "@/services/room.services";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await listRoom(id);
    return NextResponse.json(payload);
  } catch   {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = validateUpdateRoom(body);
    const payload = await updateRoom(id, parsed);
    return NextResponse.json(
      {
        message: "Update successfully",
        payload,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if ((error as { code: string }).code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await removeRoom(id);
    return NextResponse.json({ message: "Delete successfully" });
  } catch (error: unknown) {
    if ((error as { code: string }).code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
