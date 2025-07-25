"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import axios from "axios";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { ResponseBookingType } from "@/validators/booking.validator";
import { ResponseRoomType } from "@/validators/room.validator";
import { ResponseUserType } from "@/validators/user.validator";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MemberCardInfoProps {
  data: ResponseUserType;
}

type BookingState = {
  booking: ResponseBookingType;
  room: ResponseRoomType;
};

export const MemberCardInfo = ({ data }: MemberCardInfoProps) => {
  const [bookingList, setBookingList] = useState<BookingState[]>([]);

  const fetchRooms = async () => {
    const results = await Promise.all(
      data.bookings.map(async (booking) => {
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

  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild className="w-full cursor-pointer">
        <Button>Booking</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col px-4 py-12 overflow-y-scroll">
        {bookingList.map((list, i) => (
          <div key={i} className="grid gap-4 text-sm">
            <Separator />
            <p className="text-base text-muted-foreground">
              Booking ID : 000{i + 1}
            </p>
            {/* Image */}
            <div className="relative aspect-video w-full">
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
