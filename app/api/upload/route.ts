import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";

import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 413 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 415 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const payload = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "profile" }, (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        })
        .end(buffer);
    });
    return NextResponse.json(
      {
        message: "Created successfully",
        url: (payload as UploadApiResponse).secure_url,
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
