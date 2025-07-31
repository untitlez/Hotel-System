"use client";

import { ChevronUp } from "lucide-react";

import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BackToTopButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="fixed bottom-8 right-8 rounded-full border shadow-lg cursor-pointer transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Back to Top</p>
      </TooltipContent>
    </Tooltip>
  );
};
