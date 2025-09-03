"use client";

import Image from "next/image";
import { BadgeInfo } from "lucide-react";

import { ResponseUserType } from "@/validators/user.validator";
import { ResponseRoomType } from "@/validators/room.validator";
import { ResponseBookingType } from "@/validators/booking.validator";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BookingTableInfoProps {
  booking: ResponseBookingType;
  user: ResponseUserType;
  room: ResponseRoomType;
}

export const BookingTableInfo = ({
  booking,
  user,
  room,
}: BookingTableInfoProps) => {
  const getTime =
    new Date(booking.checkOutDate).getTime() -
    new Date(booking.checkInDate).getTime();
  const night = getTime / (1000 * 60 * 60 * 24);

  return (
    <Card className="max-w-screen-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Booking Info :</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="relative aspect-video bg-muted rounded-md overflow-hidden shadow-lg mb-6">
          {room && (
            <Image
              src={room.image ?? ""}
              alt={room.name ?? "Room Image"}
              className="object-cover"
              sizes="50vw"
              fill
            />
          )}
        </div>

        {/* Title */}
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-8 items-center gap-1.5">
            <div className="flex items-center">
              Customer Name
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <BadgeInfo />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {user && (
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex gap-4">
                        Full Name :
                        <p className="mx-auto">
                          {user?.profile?.fullName ?? "-"}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        Birthdate :
                        <p className="mx-auto">
                          {user.profile?.birthday
                            ? new Date(
                                user.profile?.birthday,
                              ).toLocaleDateString()
                            : "-"}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        Address :
                        <p className="mx-auto">
                          {user?.profile?.address ?? "-"}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        Phone :
                        <p className="mx-auto">{user?.profile?.phone ?? "-"}</p>
                      </div>
                      <div className="flex gap-4">
                        Email :<p className="mx-auto">{user?.email}</p>
                      </div>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>
            <p>Room Name</p>
            <p>Type</p>
            <p>Check In:</p>
            <p>Check Out:</p>
            <p>Amount:</p>
            <p>Status:</p>
            <p>Created At:</p>
          </div>

          {/* Detail */}
          <div className="grid grid-rows-8 items-center gap-2">
            <p>{user?.profile?.fullName ?? "-"}</p>
            <p>{room?.name}</p>
            <p>{room?.type}</p>
            <p>{new Date(booking.checkInDate).toLocaleDateString()}</p>
            <p>{new Date(booking.checkOutDate).toLocaleDateString()}</p>
            <p>{night} Nights</p>
            <p>
              <Badge className="bg-chart-3 text-secondary">
                {booking.statusPaid}
              </Badge>
            </p>
            <p>
              {new Date(booking.createdAt).toLocaleString("en-US", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
          </div>
        </div>

        {/* end */}
        <div className="grid grid-cols-2 mt-4">
          <p>Special Requests:</p>
          <p className="flex flex-wrap gap-2">
            {booking.request?.bedType && (
              <Badge variant="secondary">{booking.request.bedType}</Badge>
            )}
            {booking.request?.roomType && (
              <Badge variant="secondary">{booking.request.roomType}</Badge>
            )}
            {booking.request?.note && (
              <Badge variant="secondary" className="whitespace-break-spaces">
                {booking.request.note}
              </Badge>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
