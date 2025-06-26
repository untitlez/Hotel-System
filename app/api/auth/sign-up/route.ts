import { createAccount } from "@/services/sign-up.services";
import { validateSignUp } from "@/validators/sign-up.validator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const body = await req.json();
    const validate = validateSignUp(body);
    const payload = await (validate);
    return NextResponse.json({
      message: "Created account successfully",
      data: payload,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
