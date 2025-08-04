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
        message: "Created successfully",
        payload,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
