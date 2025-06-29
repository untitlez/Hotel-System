import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { getAllUser } from "@/services/user.services";

export async function GET() {
    try {
      const payload = await getAllUser();
      return NextResponse.json(payload);
    } catch (error) {
      console.error("error", error);
      return NextResponse.json({ message: "Something went wrong" });
    }
  }
