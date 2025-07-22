"use client";

import Image from "next/image";
import { ResponseRoomType } from "@/validators/room.validator";

import { Badge } from "@/components/ui/badge";

interface CardImagePropertyProps {
  item: ResponseRoomType;
}

export const CardImageProperty = ({ item }: CardImagePropertyProps) => {
  return (
    <div className="relative aspect-3/2">
      {item.type === "Villa" && (
        <Badge className="absolute left-0 z-10 m-4 font-semibold text-sm shadow-md bg-chart-1">
          {item.type}
        </Badge>
      )}
      {item.type === "Hotel" && (
        <Badge className="absolute left-0 z-10 m-4 font-semibold text-sm shadow-md bg-chart-2">
          {item.type}
        </Badge>
      )}
      {item.type === "Resort" && (
        <Badge className="absolute left-0 z-10 m-4 font-semibold text-sm shadow-md bg-chart-3">
          {item.type}
        </Badge>
      )}
      <Image
        src={item.image ?? ""}
        alt={item.name}
        className="object-cover rounded-xl md:hover:scale-105 transform duration-700 cursor-pointer"
        sizes="33vw"
        fill
      />
    </div>
  );
};
