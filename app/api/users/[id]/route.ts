import { listUser, removeUser, updateUser } from "@/services/users.services";
import { userSchema } from "@/validators/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const payload = await listUser(params.id);
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
    const body = await req.json();
    const parsed = userSchema.safeParse(body);
    const payload = await updateUser(params.id, parsed);
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
    await removeUser(params.id);
    return NextResponse.json({
      message: "Delete successfully",
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
