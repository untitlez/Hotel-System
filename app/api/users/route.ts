import { NextResponse } from "next/server";
import { allUser } from "@/services/user.services";

export async function GET() {
  try {
    const payload = await allUser();
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
