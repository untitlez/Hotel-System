"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen grid place-content-center gap-4">
      <p className="text-xl">Some thing went wrong</p>
      <div className="flex items-center justify-center gap-4">
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Button className="cursor-pointer" onClick={() => reset()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
