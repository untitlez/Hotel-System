"use client";

import { BedDouble, Grid2X2, List, User2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface AmenityCardPropertyProps {
  beds?: string;
  maxGuests?: number;
  roomSize?: number;
  amenities: string[];
}

export function AmenityCardProperty({
  beds,
  maxGuests,
  roomSize,
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
      <Button size="sm" variant="outline">
        <Grid2X2 /> {`${roomSize}m²`}
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
