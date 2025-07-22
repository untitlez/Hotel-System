"use client";

import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface BookingConfirmProps {
  pricePerNight: number;
}

export const BookingConfirm = ({ pricePerNight }: BookingConfirmProps) => {
  const { watch, formState } = useFormContext();
  const checkInDate = watch("checkInDate");

  return (
    <div className="bg-card flex flex-col gap-4 p-6 rounded-xl">
      <p>
        By selecting the button below, I agree to the Host's House Rules, Ground
        rules for guests, Teraluxe's Rebooking and Refund Policy, and that
        Teraluxe can charge my payment method if I'm responsible for damage.
      </p>
      <p>
        I also agree to the
        <u className="font-medium">
          {" "}
          updated Terms of Service, Payments Terms of Service
        </u>
        , and I acknowledge the Privacy Policy.
      </p>
      {checkInDate && pricePerNight > 0 ? (
        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="cursor-pointer"
        >
          {formState.isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              Please Waiting...
            </>
          ) : (
            " Confirm and booking"
          )}
        </Button>
      ) : (
        <Button variant="outline" disabled={true}>
          {pricePerNight <= 0
            ? "Please select the correct date"
            : "Please select date"}
        </Button>
      )}
    </div>
  );
};
