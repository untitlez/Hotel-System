import {
  listProfile,
  removeProfile,
  updateProfile,
} from "@/services/profile.services";
import { UserProfileSchema } from "@/validators/profile.validator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const payload = await listProfile(id);
    return NextResponse.json(payload);
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = UserProfileSchema.safeParse(body);
    const payload = await updateProfile(id, parsed.data);

    return NextResponse.json({
      message: "Update successfully",
      data: payload,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    await removeProfile(id);
    return NextResponse.json({
      message: "Delete successfully",
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
