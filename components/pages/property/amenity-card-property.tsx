"use client";

import { BedDouble, List, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface AmenityCardPropertyProps {
  beds?: string;
  maxGuests?: number;
  amenities: string[];
}

export function AmenityCardProperty({
  beds,
  maxGuests,
  amenities,
}: AmenityCardPropertyProps) {
  return (
    <div className="flex flex-wrap gap-1.5 items-end">
      <Button size="sm" variant="outline">
        <BedDouble /> {beds}
      </Button>
      <Button size="sm" variant="outline">
        <User2 /> {maxGuests}
      </Button>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button size="sm" variant="outline">
            <List />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-wrap gap-1.5">
          {amenities.map((item, i) => (
            <Button key={i} size="sm" variant="outline">
              {item}
            </Button>
          ))}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
