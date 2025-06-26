// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const searchParams = req.nextUrl.searchParams;
//   const query = searchParams.get("search") || "";

//   try {
//     const payload = await prisma.room.findMany({
//       where: {
//         OR: [
//           { location: { contains: query, mode: "insensitive" } },
//           { type: { contains: query, mode: "insensitive" } },
//         ],
//       },
//     });
//     return NextResponse.json(payload);
//   } catch (error) {
//     console.error("error", error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const payload = await prisma.room.create({
//       data: body,
//     });
//     return NextResponse.json({
//       message: "Created successfully",
//       data: payload,
//     });
//   } catch (error) {
//     console.error("error", error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// }
