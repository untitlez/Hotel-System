"use client";

import { XCircle } from "lucide-react";

export const BookingWarning = () => {
  return (
    <div className="bg-card flex items-center p-6 rounded-xl">
      <XCircle className="text-destructive m-4" />
      <div>
        <p>Cancellation policy</p>
        <p className="text-sm">
          Free cancellation before 3:00 PM on Oct 20.
          <span className="text-muted-foreground">
            {" "}
            Cancel before Oct 27 for a partial refund.
          </span>
        </p>
      </div>
    </div>
  );
};
