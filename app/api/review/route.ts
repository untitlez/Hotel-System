import { NextRequest, NextResponse } from "next/server";
import { allReview, createReview } from "@/services/review.services";
import { validateReview } from "@/validators/review.validator";

export async function GET(req: NextRequest) {
  try {
    const payload = await allReview();
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateReview(body);
    const payload = await createReview(parsed);
    return NextResponse.json(
      {
        message: "Created successfully",
        payload,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 },
    );
  }
}
