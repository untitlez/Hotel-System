"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import { RoomType } from "@/validators/room.validator";

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
import { useRouter } from "next/navigation";

interface RoomsOfficeProps {
  data: RoomType[];
}

export const RoomsOffice = ({ data }: RoomsOfficeProps) => {
  const tableHeader = [
    "Room Number",
    "Image",
    "Location",
    "Room Type",
    "Description",
    "Price",
  ];

  const router = useRouter();

  const handleView = (id: string) =>
    router.push(`/dashboard/rooms-office/${id}`);

  return (
    <div className="space-y-4 my-2">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Input className="w-100 pl-8" placeholder="Search the table..." />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </div>
        <Button asChild>
          <Link href="/dashboard/rooms-office/create-room">Create Room</Link>
        </Button>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow className="bg-muted">
            {tableHeader.map((item, i) => (
              <TableHead key={i}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={i}
              onClick={() => handleView(item.id)}
              className="cursor-pointer"
            >
              <TableCell>{item.roomNumber}</TableCell>
              <TableCell>Image.jpg</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.pricePerNight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
