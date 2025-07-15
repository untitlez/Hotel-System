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
export const TooltipButton = ({
  href,
  icon: Icon,
  label = "Label",
  side = "top",
  tooltip = "Tooltip",
  ...props
}: TooltipButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {href ? (
          <Button asChild {...props}>
            <Link href={href}>{Icon ? <Icon /> : <p>{label}</p>}</Link>
          </Button>
        ) : (
          <Button {...props}>{Icon ? <Icon /> : <p>{label}</p>}</Button>
        )}
      </TooltipTrigger>
      <TooltipContent side={side} className="font-medium">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};
