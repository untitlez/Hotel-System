import { NextResponse } from "next/server";
import { allUser } from "@/services/user.services";

export async function GET() {
  try {
    const payload = await allUser();
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
