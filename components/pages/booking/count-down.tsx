"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CountDownProps {
  minute: number;
}

export const CountDown = ({ minute }: CountDownProps) => {
  const router = useRouter();
  const initTime = 60;
  const [sec, setSec] = useState(initTime - 1);
  const [min, setMin] = useState(minute - 1);
  const [open, setOpen] = useState(false);

  const onBack = () => router.back();

  useEffect(() => {
    setInterval(() => {
      setSec((prev) => (prev === 0 ? initTime - 1 : prev - 1));
      setMin((prev) => (sec === 0 ? min - 1 : prev));
    }, 1000);

    setInterval(() => {
      setMin((prev) => prev - 1);
    }, 1000 * initTime);
  }, [initTime]);

  useEffect(() => {
    if (min < 0) {
      setOpen(true);
    }
  }, [min]);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="shadow-lg">
          <Timer />
          Time Out
          {!open && (
            <div className="font-mono flex">
              <span>{min}</span>
              <span>:</span>
              <span>{sec < 10 ? `0${sec}` : sec}</span>
            </div>
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-1.5">
            <Timer />
            Reservation Time Expired
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your session has timed out. For your security, the reservation was
            not completed. Please restart the booking process to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="cursor-pointer" onClick={onBack}>
            Go Back
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
