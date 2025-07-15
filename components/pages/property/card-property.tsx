"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes";
import { ResponseRoomType } from "@/validators/room.validator";

import { AmenityCardProperty } from "./amenity-card-property";
import { Badge } from "@/components/ui/badge";

interface CardPropertyProps {
  data: ResponseRoomType[];
}

export const CardProperty = ({ data }: CardPropertyProps) => {
  const router = useRouter();
  const handleView = (id: string) => {
    router.push(Routes.dashboard.room + id);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="grid gap-6 w-full">
          <div className="relative aspect-3/2">
            {item.type === "Villa" && (
              <Badge className="absolute z-10 m-4 font-semibold text-sm shadow-md bg-chart-1">
                {item.type}
              </Badge>
            )}
            {item.type === "Hotel" && (
              <Badge className="absolute z-10 m-4 font-semibold text-sm shadow-md bg-chart-2">
                {item.type}
              </Badge>
            )}
            {item.type === "Resort" && (
              <Badge className="absolute z-10 m-4 font-semibold text-sm shadow-md bg-chart-3">
                {item.type}
              </Badge>
            )}
            <Image
              src={item.image ?? ""}
              alt={item.name}
              className="object-cover rounded-xl hover:scale-105 transform duration-700 cursor-pointer"
              sizes="33vw"
              fill
              onClick={() => handleView(item.id)}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <span className="font-bold text-lg text-primary">
                $ {item.pricePerNight}
              </span>
            </div>
            <p className="text-muted-foreground">{item.location}</p>
          </div>
          <AmenityCardProperty
            beds={item.beds}
            maxGuests={item.maxGuests}
            amenities={item.amenities}
          />
        </div>
      ))}
    </>
  );
};
