"use client";

import Image from "next/image";

import { ResponseRoomType } from "@/validators/room.validator";

import { Badge } from "@/components/ui/badge";

interface PropertyCardImageProps {
  item: ResponseRoomType;
}

export const PropertyCardImage = ({ item }: PropertyCardImageProps) => {
  return (
    <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-lg cursor-pointer">
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
        <Badge className="absolute left-0 z-10 m-4 font-semibold text-sm shadow-md bg-chart-5 dark:bg-chart-3">
          {item.type}
        </Badge>
      )}
      <Image
        src={item.image ?? ""}
        alt={item.name}
        className="object-cover md:hover:scale-105 transform duration-700 delay-300"
        sizes="33vw"
        fill
      />
    </div>
  );
};
