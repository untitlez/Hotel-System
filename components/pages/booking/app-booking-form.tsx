"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { ResponseRoomType } from "@/validators/room.validator";
import {
  CreateBookingSchema,
  CreateBookingType,
} from "@/validators/booking.validator";

import { BookingSummary } from "./booking-summary";
import { BookingPayment } from "./booking-payment";
import { BookingRequest } from "./booking-request";
import { BookingWarning } from "./booking-warning";
import { BookingConfirm } from "./booking-confirm";
import { BookingCardInfo } from "./booking-card-info";

interface AppBookingFormProps {
  room: ResponseRoomType;
  roomId: string;
  userId: string;
}

export const AppBookingForm = ({
  room,
  roomId,
  userId,
}: AppBookingFormProps) => {
  const router = useRouter();
  const form = useForm<CreateBookingType>({
    resolver: zodResolver(CreateBookingSchema),
    defaultValues: {
      userId: userId,
      roomId: roomId,
      statusPaid: "PENDING",
    },
  });

  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [night, setNight] = useState<number>(1);
  const [payment, setPayment] = useState<string>("");

  const pricePerNight = room.pricePerNight * night;
  const vat = pricePerNight * 0.1;
  const beforeDiscount = pricePerNight + vat;
  const discount = beforeDiscount - 1;
  const totalPrice = beforeDiscount - discount;

  useEffect(() => {
    if (checkIn && checkOut) {
      const getDay = Math.ceil(
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
      );
      setNight(getDay);
      form.setValue("checkInDate", checkIn);
      form.setValue("checkOutDate", checkOut);
    }
  }, [checkIn, checkOut]);

  const onConfirm = async (bookingData: CreateBookingType) => {
    try {
      await axios.post(Config.API_URL + Endpoints.booking, bookingData);
      toast.success("Your booking was successful!");
      router.push(Routes.pages.profile);
    } catch (error) {
      toast.error(
        "Something went wrong. Please check your information and try again.",
      );
    }
  };

  return (
    <div className=" grid lg:grid-cols-3 gap-12">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onConfirm)}
          className="col-span-3 lg:col-span-2 flex flex-col gap-8"
        >
          <BookingSummary
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
          />
          <BookingPayment payment={payment} setPayment={setPayment} />
          <BookingRequest />
          <BookingWarning checkIn={checkIn} />
          <BookingConfirm pricePerNight={pricePerNight} />
        </form>
      </FormProvider>

      <div className="col-span-3 lg:col-span-1">
        <BookingCardInfo
          room={room}
          night={night}
          pricePerNight={pricePerNight}
          vat={vat}
          discount={discount}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};
