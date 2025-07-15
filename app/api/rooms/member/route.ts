import { NextRequest, NextResponse } from "next/server";

import { validateQuery } from "@/validators/query.validator";
import { queryRoom } from "@/services/room.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get("search") ?? "";
    const sort = searchParams.get("sort") ?? "desc";
    const page = searchParams.get("page") ?? "1";
    const limit = searchParams.get("limit") ?? "12";
    const query = validateQuery({ search, sort, page, limit });
    const payload = await queryRoom(query);
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
