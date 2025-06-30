import { NextRequest, NextResponse } from "next/server";
import { createAccount } from "@/services/sign-up.services";
import { validateSignUp } from "@/validators/sign-up.validator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validate = validateSignUp(body);
    const payload = await createAccount(validate);
    return NextResponse.json(
      {
        success: true,
        message: "Create Successfully!",
        data: payload,
      },
      { status: 201 }
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
