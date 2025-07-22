"use client";

import Image from "next/image";
import { ResponseRoomType } from "@/validators/room.validator";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookingCardInfoProps {
  room: ResponseRoomType;
  night: number;
  pricePerNight: number;
  vat: number;
  discount: number;
  totalPrice: number;
}

export const BookingCardInfo = ({
  room,
  night,
  pricePerNight,
  vat,
  discount,
  totalPrice,
}: BookingCardInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="pointer-events-none">
          <div className="relative aspect-3/2">
            <Image
              src={room.image ?? ""}
              alt={room.name}
              className="object-cover rounded-xl md:hover:scale-105 transform duration-700 cursor-pointer"
              sizes="33vw"
              fill
            />
          </div>
        </CardTitle>
        <CardDescription className="flex justify-between my-4">
          <div className="space-y-1">
            <h3 className="text-secondary-foreground font-semibold">
              {room.name}
            </h3>
            {room.location}
          </div>
          {room.type}
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col text-sm text-muted-foreground">
        <p className="text-base text-secondary-foreground mb-1.5">
          Price details
        </p>
        <div className="flex items-center justify-between">
          {night ? `Room Rate (${night} Nights)` : "Room Rate (1 Night)"}
          <p>$ {pricePerNight.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>GST (10%)</p>
          <p>$ {vat.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between text-chart-2">
          <p>Promotion Discount</p>
          <p>-$ {discount.toLocaleString()}</p>
        </div>
      </CardContent>
      <CardFooter className="grid gap-6">
        <Separator />
        <Button
          form="booking-form"
          variant="secondary"
          size="lg"
          className="flex justify-between font-semibold"
        >
          <p>Total</p>
          <p>$ {totalPrice.toLocaleString()}</p>
        </Button>
      </CardFooter>
    </Card>
  );
};
