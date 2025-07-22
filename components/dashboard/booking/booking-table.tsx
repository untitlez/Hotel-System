"use client";

import { useRouter } from "next/navigation";
import { BedDouble, Cigarette, Mail, Search } from "lucide-react";

import { Routes } from "@/lib/routes";
import { ResponseBookingType } from "@/validators/booking.validator";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableHeader = [
  "No.",
  "Check In",
  "Check Out",
  "Special Requests",
  "Status",
  "Create At",
  "",
];

interface DashboardBookingTableProps {
  data: ResponseBookingType[];
}

export const DashboardBookingTable = ({ data }: DashboardBookingTableProps) => {
  const router = useRouter();
  const handleView = (id: string) => {
    router.push(Routes.dashboard.booking + id);
  };

  return (
    <div className="space-y-4 my-2">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Input className="w-100 pl-8" placeholder="Search the table..." />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </div>
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
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                {new Date(item.checkInDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(item.checkOutDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="flex flex-wrap gap-1">
                {item.request?.bedType && (
                  <Button variant="outline" size="icon">
                    <BedDouble />
                  </Button>
                )}
                {item.request?.roomType && (
                  <Button variant="outline" size="icon">
                    <Cigarette />
                  </Button>
                )}
                {item.request?.note && (
                  <Button variant="outline" size="icon">
                    <Mail />
                  </Button>
                )}
              </TableCell>
              <TableCell>
                <Badge className="bg-chart-3 text-secondary">
                  {item.statusPaid}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(item.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
