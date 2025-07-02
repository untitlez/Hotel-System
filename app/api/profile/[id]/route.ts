import { NextRequest, NextResponse } from "next/server";

import { validateProfile } from "@/validators/profile.validator";
import { removeProfile, updateProfile } from "@/services/profile.services";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = validateProfile(body);
    const payload = await updateProfile(id, parsed);
    return NextResponse.json(
      {
        message: "Update successfully",
        payload,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong", error },
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
    await removeProfile(id);
    return NextResponse.json({ message: "Delete successfully" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
