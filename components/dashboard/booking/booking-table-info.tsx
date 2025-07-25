"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BadgeInfo } from "lucide-react";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { ResponseUserType } from "@/validators/user.validator";
import { ResponseRoomType } from "@/validators/room.validator";
import { ResponseBookingType } from "@/validators/booking.validator";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface BookingTableInfoProps {
  booking: ResponseBookingType;
}

export const BookingTableInfo = ({ booking }: BookingTableInfoProps) => {
  const [user, setUser] = useState<ResponseUserType>();
  const [room, setRoom] = useState<ResponseRoomType>();
  const getTime =
    new Date(booking.checkOutDate).getTime() -
    new Date(booking.checkInDate).getTime();
  const night = getTime / (1000 * 60 * 60 * 24);

  const getUser = async () => {
    if (!booking) return;
    const { data } = await axios.get(
      Config.API_URL + Endpoints.users + booking.userId
    );
    setUser(data);
  };

  const getRoom = async () => {
    if (!booking) return;
    const { data } = await axios.get(
      Config.API_URL + Endpoints.room.baseRoom + booking.roomId
    );
    setRoom(data);
  };

  useEffect(() => {
    getUser();
    getRoom();
  }, [booking.userId, booking.roomId]);

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
                        <p className="mx-auto">{user?.profile.fullName}</p>
                      </div>
                      <div className="flex gap-4">
                        Birthdate :
                        <p className="mx-auto">
                          {new Date(user.profile.birthday).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        Address :
                        <p className="mx-auto">{user?.profile.address}</p>
                      </div>
                      <div className="flex gap-4">
                        Phone :<p className="mx-auto">{user?.profile.phone}</p>
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
            <p>{user?.profile.fullName}</p>
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
              <Badge variant="secondary">{booking.request.note}</Badge>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
