import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { allUser } from "@/services/user.services";

export async function GET(req: NextRequest) {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search") ?? "";
    const payload = await allUser(query);
    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
