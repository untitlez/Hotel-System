"use client";

import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface BookingConfirmProps {
  pricePerNight: number;
}

export const BookingConfirm = ({ pricePerNight }: BookingConfirmProps) => {
  const { watch, formState } = useFormContext();
  const checkInDate = watch("checkInDate");

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 text-justify">
        <p>
          By selecting the button below, I agree to the Host's House Rules,
          Ground rules for guests, Teraluxe's Rebooking and Refund Policy, and
          that Teraluxe can charge my payment method if I'm responsible for
          damage.
        </p>
        <p>
          I also agree to the{" "}
          <u className="font-medium">
            updated Terms of Service, Payments Terms of Service,
          </u>{" "}
          and I acknowledge the Privacy Policy.
        </p>
      </CardContent>
      <CardFooter>
        {checkInDate && pricePerNight > 0 ? (
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={formState.isSubmitting}
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
          <Button variant="outline" className="w-full" disabled={true}>
            {pricePerNight <= 0
              ? "Please select the correct date"
              : "Please select date"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
