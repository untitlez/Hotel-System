"use client";

import { format } from "date-fns";
import { XCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface BookingWarningProps {
  checkIn?: Date | undefined;
}

export const BookingWarning = ({ checkIn }: BookingWarningProps) => {
  const formattedDate = checkIn ? format(checkIn, "MMM dd") : null;

  return (
    <Card>
      <CardContent className="flex items-center gap-6">
        <XCircle className="text-destructive" />
        <div>
          <p>Cancellation policy</p>
          <p className="text-sm">
            Free cancellation before 3:00 PM on {""}
            {formattedDate}. {""}
            <span className="text-muted-foreground">
              Cancel before {formattedDate} for a partial refund.
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
