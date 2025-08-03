"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen grid place-content-center gap-4">
      <p className="text-xl">Some thing went wrong</p>
      <Button
        className="justify-self-center cursor-pointer"
        onClick={() => reset()}
      >
        Try Again
      </Button>
    </div>
  );
}
