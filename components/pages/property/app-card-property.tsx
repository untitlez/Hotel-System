"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Routes } from "@/lib/routes";
import { ResponseRoomType } from "@/validators/room.validator";

import { PropertyCardImage } from "./property-card-image";
import { PropertyCardInfo } from "./property-card-info";
import { PropertyAmenityCard } from "./property-amenity-card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface AppCardPropertyProps {
  data: ResponseRoomType[];
}

export const AppCardProperty = ({ data }: AppCardPropertyProps) => {
  const router = useRouter();
  const session = useSession();

  const [isLoading, setIsLoading] = useState(false);

  const onBooking = (id: string) => {
    setIsLoading(true);
    router.push(Routes.pages.booking + id);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="grid gap-6 w-full">
          <Sheet>
            <SheetTrigger>
              <PropertyCardImage item={item} />
            </SheetTrigger>
            <SheetContent className="overflow-auto">
              <SheetHeader>
                <SheetTitle>{item.name}</SheetTitle>
                <SheetDescription>{item.location}</SheetDescription>
              </SheetHeader>
              <PropertyCardInfo item={item} />
              <SheetFooter>
                {!session ? (
                  <Button disabled variant={"destructive"}>
                    Please Login
                  </Button>
                ) : (
                  <Button
                    className="cursor-pointer"
                    disabled={isLoading}
                    onClick={() => onBooking(item.id)}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Booking Now"
                    )}
                  </Button>
                )}
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
          <PropertyAmenityCard
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
