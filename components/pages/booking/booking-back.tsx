"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export const BookingBack = () => {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer rounded-full"
      onClick={onBack}
    >
      <ChevronLeftCircle className="size-5.5" />
    </Button>
  );
};
