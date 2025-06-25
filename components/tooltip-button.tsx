"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipButtonProps extends React.ComponentProps<typeof Button> {
  label?: string;
  icon?: LucideIcon;
  href?: string;
  side?: "top" | "right" | "bottom" | "left";
  tooltip?: string;
}
export function TooltipButton({
  label = "Label",
  icon: Icon,
  href = "#",
  side = "top",
  tooltip = "Tooltip",
  ...props
}: TooltipButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild {...props}>
          <Link href={href}>
            {Icon && <Icon className="size-4" />}
            {label}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side={side}>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
