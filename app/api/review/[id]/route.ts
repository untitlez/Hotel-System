import { NextRequest, NextResponse } from "next/server";
import { removeReview } from "@/services/review.services";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;
    await removeReview(id);
    return NextResponse.json({ message: "Delete successfully" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 },
    );
  }
}
