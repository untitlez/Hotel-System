import { NextRequest, NextResponse } from "next/server";

import { validateQuery } from "@/validators/query.validator";
import { queryRoom } from "@/services/room.services";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get("search") ?? "";
    const type = searchParams.get("type") ?? "";
    const location = searchParams.get("location") ?? "";

    const sort = searchParams.get("sort") ?? "desc";
    const page = searchParams.get("page") ?? "1";
    const limit = searchParams.get("limit") ?? "12";

    const query = validateQuery({ search, type, location, sort, page, limit });
    const payload = await queryRoom(query);
    return NextResponse.json(payload);
  } catch   {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
