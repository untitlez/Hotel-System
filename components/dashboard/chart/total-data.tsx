"use client";

import { TrendingUp } from "lucide-react";

import { ResponseUserType } from "@/validators/user.validator";
import { ResponseBookingType } from "@/validators/booking.validator";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookingsTypeTotalProps {
  bookings: ResponseBookingType[];
  users: ResponseUserType[];
}

export const TotalData = ({ bookings, users }: BookingsTypeTotalProps) => {
  const totalRooms = bookings.map((booking) => booking.roomId);
  const totalUsers = users.map((user) => user.email);
  const lastMonth = new Date().getMonth();
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardDescription>Total Bookings</CardDescription>
          <CardTitle className="text-3xl font-semibold">
            {totalRooms.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Bookings for the last {lastMonth} months
          </div>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardDescription>Total Members</CardDescription>
          <CardTitle className="text-3xl font-semibold">
            {totalUsers.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last {lastMonth} months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
