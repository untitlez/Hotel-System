"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "sonner";
import { BedDouble, Cigarette, Mail, User2 } from "lucide-react";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { ResponseUserType } from "@/validators/user.validator";
import { ResponseRoomType } from "@/validators/room.validator";
import { ResponseBookingType } from "@/validators/booking.validator";

import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ProfileBookingsListProps {
  data: ResponseUserType;
}

type BookingState = {
  booking: ResponseBookingType;
  room: ResponseRoomType;
};

export const ProfileBookingsList = ({ data }: ProfileBookingsListProps) => {
  const router = useRouter();
  const [bookingList, setBookingList] = useState<BookingState[]>([]);

  const onDelete = async (id: string) => {
    try {
      await axios.delete(Config.API_URL + Endpoints.booking + id);
      toast.success("Booking has been deleted.");
      router.push(Routes.pages.home);
    } catch (_error: unknown) {
      toast.error("Failed to Delete!");
    }
  };

  useEffect(() => {
    if (!data) return;

    const fetchRooms = async () => {
      const results = await Promise.all(
        data.bookings.map(async (booking) => {
          const res = await axios.get(
            Config.API_URL + Endpoints.room.baseRoom + booking.roomId,
          );
          return {
            booking,
            room: res.data,
          };
        }),
      );
      setBookingList(results);
    };

    fetchRooms();
  }, []);

  return (
    <>
      {bookingList.map((list, i) => (
        <Card key={i}>
          <CardTitle className="flex items-center justify-between text-muted-foreground px-6">
            Booking ID : 000{i + 1}
            <DeleteButton
              size="sm"
              title="Cancel this booking?"
              description="This will permanently remove the reservation from your history."
              onClick={() => onDelete(list.booking.id)}
            />
          </CardTitle>
          <CardContent className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {/* Image */}
            <div className="relative aspect-video w-full max-w-3xs bg-muted">
              <Image
                src={list.room.image ?? ""}
                alt={list.room.name}
                className="rounded-lg object-cover"
                sizes="33vw"
                fill
              />
            </div>

            <div className="grid gap-4 flex-1">
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

              <div className="hidden md:flex justify-between items-start">
                {/* Max Guests */}
                <div className="grid gap-2 min-w-max">
                  Max Guests :
                  <div>
                    <Button variant="outline" size="sm">
                      <User2 />
                      {list.room.maxGuests}
                    </Button>
                  </div>
                </div>
                {/* Requests */}
                <div className="grid gap-2">
                  Requests :
                  <div className="flex gap-1">
                    {list.booking.request?.bedType && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="cursor-pointer"
                          >
                            <BedDouble />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="text-sm break-words w-full max-w-xs">
                          {list.booking.request?.bedType}
                        </PopoverContent>
                      </Popover>
                    )}
                    {list.booking.request?.roomType && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="cursor-pointer"
                          >
                            <Cigarette />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="text-sm break-words w-full max-w-xs">
                          {list.booking.request?.roomType}
                        </PopoverContent>
                      </Popover>
                    )}
                    {list.booking.request?.note && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="cursor-pointer"
                          >
                            <Mail />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="text-sm break-words w-full max-w-xs">
                          {list.booking.request?.note}
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </div>
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
          </CardContent>
        </Card>
      ))}
    </>
  );
};
