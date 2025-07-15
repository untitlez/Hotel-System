"use client";

import { type LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TooltipRoomTable = ({
  Icon,
  text,
}: {
  Icon: LucideIcon;
  text: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Icon className="p-0.5" />
      </TooltipTrigger>
      <TooltipContent className="font-semibold">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
