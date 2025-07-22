"use client";

import { isBefore, startOfDay } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface BookingSummaryProps {
  checkIn: Date | undefined;
  setCheckIn: React.Dispatch<React.SetStateAction<Date | undefined>>;
  checkOut: Date | undefined;
  setCheckOut: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export const BookingSummary = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
}: BookingSummaryProps) => {
  return (
    <div className="bg-card p-6 rounded-xl space-y-4">
      <p>Booking summary</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="cursor-pointer">
              <p className="text-muted-foreground mr-2">Check in :</p>
              {checkIn ? checkIn.toLocaleDateString() : "Select"}
              <CalendarIcon className="ml-auto" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={(date) => setCheckIn(date)}
              disabled={(date) => isBefore(date, startOfDay(new Date()))}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="cursor-pointer">
              <p className="text-muted-foreground mr-2">Check out :</p>
              {checkOut ? checkOut.toLocaleDateString() : "Select"}
              <CalendarIcon className="ml-auto" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={(date) => setCheckOut(date)}
              disabled={(date) =>
                isBefore(date, startOfDay(new Date())) ||
                (checkIn ? isBefore(date, checkIn) : false)
              }
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
