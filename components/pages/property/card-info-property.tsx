"use client";

import { BedDouble, DollarSign, Grid2X2, User2 } from "lucide-react";
import { ResponseRoomType } from "@/validators/room.validator";

import { CardImageProperty } from "./card-image-property";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CardInfoPropertyProps {
  item: ResponseRoomType;
}

export const CardInfoProperty = ({ item }: CardInfoPropertyProps) => {
  const infoItems = [
    {
      icon: DollarSign,
      title: "Nightly Rate",
      detail: "$ " + item.pricePerNight.toLocaleString(),
    },
    { icon: User2, title: "Guests", detail: `${item.maxGuests} People` },
    { icon: BedDouble, title: "Bed Size", detail: item.beds },
    { icon: Grid2X2, title: "Room Size", detail: `${item.roomSize} m²` },
  ];

  return (
    <div className="flex flex-col gap-6 px-4">
      <div className="pointer-events-none">
        <CardImageProperty item={item} />
      </div>
      <Separator />

      <div className="space-y-2">
        {infoItems.map((info, i) => (
          <div
            key={i}
            className="flex flex-wrap gap-2 justify-between items-center"
          >
            <Button size="sm" variant="outline">
              <info.icon className="size-4" />
              {info.title}
            </Button>
            <p>{info.detail}</p>
          </div>
        ))}
      </div>

      <Separator />
      <div className="flex flex-wrap justify-center gap-2">
        {item.amenities.map((amenity, i) => (
          <Button key={i} size="sm" variant="outline">
            {amenity}
          </Button>
        ))}
      </div>
      <Separator />
    </div>
  );
};
