import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { validateUpdateUser } from "@/validators/user.validator";
import { listUser, removeUser, updateUser } from "@/services/user.services";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await listUser(id);
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
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
    const parsed = validateUpdateUser(body);

    const session = await auth();
    const data =
      session?.user.role === "ADMIN" ? parsed : { ...parsed, role: undefined };

    const payload = await updateUser(id, data);
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
      { message: "Something went wrong", error },
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
    await removeUser(id);
    return NextResponse.json({ message: "Delete successfully" });
  } catch (error: unknown) {
    if ((error as { code: string }).code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
