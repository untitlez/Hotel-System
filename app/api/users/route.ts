import { NextRequest, NextResponse } from "next/server";
import { createNewUser, getAllUser } from "@/services/users.services";
import { userSchema } from "@/validators/userSchema";

export async function GET() {
  try {
    const payload = await getAllUser();
    return NextResponse.json(payload);
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = userSchema.safeParse(body);
    const payload = await createNewUser(parsed);
    return NextResponse.json({
      message: "Created successfully",
      data: payload,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
