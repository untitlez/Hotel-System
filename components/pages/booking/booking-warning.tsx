"use client";

import { format } from "date-fns";
import { XCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface BookingWarningProps {
  checkIn: Date | undefined;
}

export const BookingWarning = ({ checkIn }: BookingWarningProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-6">
        <XCircle className="text-destructive" />
        <div>
          <p>Cancellation policy</p>
          <p className="text-sm">
            Free cancellation before 3:00 PM on {""}
            {format(checkIn ?? "", "MMM dd")}. {""}
            <span className="text-muted-foreground">
              Cancel before {format(checkIn ?? "", "MMM dd")} for a partial
              refund.
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
