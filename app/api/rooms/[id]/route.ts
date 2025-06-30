import { NextRequest, NextResponse } from "next/server";

import { validateRoom } from "@/validators/room.validator";
import { listRoom, removeRoom, updateRoom } from "@/services/room.services";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const payload = await listRoom(id);
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = validateRoom(body);
    const payload = await updateRoom(id, parsed);
    return NextResponse.json(
      {
        success: true,
        message: "Update Successfully!",
        data: payload,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        {
          success: false,
          message: "Not found",
        },
        { status: 404 }
      );
    }
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    await removeRoom(id);
    return NextResponse.json(
      {
        success: true,
        message: "Deleted  Successfully!",
      },
      { status: 204 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        {
          success: false,
          message: "Not found",
        },
        { status: 404 }
      );
    }
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
