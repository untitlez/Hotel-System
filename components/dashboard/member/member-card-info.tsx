"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import axios from "axios";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { ResponseBookingType } from "@/validators/booking.validator";
import { ResponseRoomType } from "@/validators/room.validator";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MemberCardInfoProps {
  bookings?: ResponseBookingType[];
}

type BookingState = {
  booking: ResponseBookingType;
  room: ResponseRoomType;
};

export const MemberCardInfo = ({ bookings }: MemberCardInfoProps) => {
  const [bookingList, setBookingList] = useState<BookingState[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const results = await Promise.all(
        (bookings ?? []).map(async (booking) => {
          const res = await axios.get(
            Config.API_URL + Endpoints.room.baseRoom + booking.roomId
          );
          return {
            booking,
            room: res.data,
          };
        })
      );
      setBookingList(results);
    };
    fetchRooms();
  }, [bookings]);

  return (
    <Sheet>
      <SheetTrigger asChild className="w-full cursor-pointer">
        <Button disabled={!bookings}>Booking</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col px-4 py-12 overflow-y-scroll">
        {bookingList.map((list, i) => (
          <div key={i} className="grid gap-4 text-sm">
            <Separator />
            <div className="flex items-center gap-3">
              <SheetTitle className="text-base text-muted-foreground">
                Booking ID :
              </SheetTitle>
              <SheetDescription className="text-base">
                000{i + 1}
              </SheetDescription>
            </div>
            {/* Image */}
            <div className="relative aspect-video w-full bg-muted">
              <Image
                src={list.room.image ?? ""}
                alt={list.room.name}
                className="rounded-lg object-cover"
                sizes="33vw"
                fill
              />
            </div>

            {/* Room Name & Location */}
            <div className="flex items-start justify-between">
              <div className="grid">
                <span>{list.room.name}</span>
                <span className="text-muted-foreground">
                  {list.room.location}
                </span>
              </div>
              {/* Type */}
              <Badge className="bg-chart-1 mt-3">{list.room.type}</Badge>
            </div>

            {/* Check In - Check Out */}
            <div className="grid gap-2">
              <Button variant="secondary" size="sm" className="space-x-2">
                <span>Check In :</span>
                {format(list.booking.checkInDate, "dd MMM yyyy")}
              </Button>
              <Button variant="secondary" size="sm" className="space-x-2">
                <span>Check Out :</span>
                {format(list.booking.checkOutDate, "dd MMM yyyy")}
              </Button>
            </div>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};
