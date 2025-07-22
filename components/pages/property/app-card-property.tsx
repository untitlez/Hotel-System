"use client";

import { ResponseRoomType } from "@/validators/room.validator";

import { CardImageProperty } from "./card-image-property";
import { CardInfoProperty } from "./card-info-property";
import { AmenityCardProperty } from "./amenity-card-property";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Routes } from "@/lib/routes";

interface AppCardPropertyProps {
  data: ResponseRoomType[];
}

export const AppCardProperty = ({ data }: AppCardPropertyProps) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="grid gap-6 w-full">
          <Sheet>
            <SheetTrigger>
              <CardImageProperty item={item} />
            </SheetTrigger>
            <SheetContent className="overflow-auto">
              <SheetHeader>
                <SheetTitle>{item.name}</SheetTitle>
                <SheetDescription>{item.location}</SheetDescription>
              </SheetHeader>
              <CardInfoProperty item={item} />
              <SheetFooter>
                <Button asChild>
                  <Link href={Routes.pages.booking + item.id}>
                    Booking Now...
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

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
            roomSize={item.roomSize}
          />
        </div>
      ))}
    </>
  );
};
