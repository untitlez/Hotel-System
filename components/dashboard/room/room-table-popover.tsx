"use client";

import { type LucideIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface RoomTablePopoverProps {
  Icon: LucideIcon;
  text: string;
}

export const RoomTablePopover = ({ Icon, text }: RoomTablePopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <Icon className="size-5" />
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-xs break-words text-sm">
        <p>{text}</p>
      </PopoverContent>
    </Popover>
  );
};
