"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { BedDouble, Blocks, HousePlus, Search, UsersIcon } from "lucide-react";

import { Config } from "@/lib/config";
import { Routes } from "@/lib/routes";
import { Endpoints } from "@/lib/endpoints";
import { ResponseRoomType } from "@/validators/room.validator";

import { toast } from "sonner";
import { RoomTablePopover } from "./room-table-popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableHeader = [];

interface DashboardRoomTableProps {
  data: ResponseRoomType[];
}

export const DashboardRoomTable = ({ data }: DashboardRoomTableProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [rooms, setRooms] = useState<ResponseRoomType[]>(data);

  const onSearch = async () => {
    try {
      const { data } = await axios.get(Config.API_URL + Endpoints.room.admin, {
        params: { search: searchInput },
      });
      setRooms(data);
      if (!searchInput) return;
      toast(`Found ${data.length} results for "${searchInput}"`);
    } catch (error: unknown) {
      console.error("Error", error);
      toast.warning("Search failed. Please try again.");
    }
  };

  const router = useRouter();
  const handleView = (id: string) => {
    router.push(Routes.dashboard.room + id);
  };

  const locations = data.map((i)=>i.location)
console.log('data', locations)
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
          <Input
            className="pl-8"
            placeholder="Search the table..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && onSearch()}
          />
        </div>
        <Button asChild>
          <Link href={Routes.dashboard.createRoom}>
          <span className="sm:hidden"><HousePlus/></span>
          <span className="hidden sm:block">Create Room</span>
          </Link>
        </Button>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow className="bg-secondary capitalize">
            <TableHead>No</TableHead>
            <TableHead>image</TableHead>
            <TableHead>name</TableHead>
            <TableHead>location</TableHead>
            <TableHead>type</TableHead>
            <TableHead>
              <RoomTablePopover Icon={UsersIcon} text="Max Guests" />
            </TableHead>
            <TableHead>
              <RoomTablePopover Icon={Blocks} text="Room Size" />
            </TableHead>
            <TableHead>
              <RoomTablePopover Icon={BedDouble} text="Bed Size" />
            </TableHead>
            <TableHead>amenities</TableHead>
            <TableHead>price / Night</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((item, i) => (
            <TableRow
              key={i}
              onClick={() => handleView(item.id)}
              className="cursor-pointer"
            >
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                <div className="relative aspect-video h-20 m-1">
                  <Image
                    src={item.image ?? ""}
                    alt={item.name}
                    className="object-cover rounded-md"
                    sizes="25vw"
                    fill
                  />
                </div>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.maxGuests}</TableCell>
              <TableCell>{item.roomSize} m²</TableCell>
              <TableCell>{item.beds}</TableCell>
              <TableCell className="flex flex-wrap gap-1 w-80">
                {item.amenities.map((amenity, i) => (
                  <Button key={i} variant="outline" size="sm">
                    {amenity}
                  </Button>
                ))}
              </TableCell>
              <TableCell>
                $ {item.pricePerNight.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
