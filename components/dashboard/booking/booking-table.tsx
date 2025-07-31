"use client";

import { useRouter } from "next/navigation";
import { format } from "date-fns";
import {
  BedDouble,
  BedSingle,
  Cigarette,
  CigaretteOff,
  Mail,
} from "lucide-react";

import { Routes } from "@/lib/routes";
import { ResponseBookingType } from "@/validators/booking.validator";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  "Request Beds Type",
  "Request Rooms Type",
  "Special Requests",
  "Status",
  "Create At",
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
        <Button variant="secondary" size="lg">
          Total Bookings : {data.length}
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
              <TableCell>{i + 1}</TableCell>
              <TableCell>{format(item.checkInDate, "dd MMM yyyy")}</TableCell>
              <TableCell>{format(item.checkOutDate, "dd MMM yyyy")}</TableCell>
              <TableCell>
                {item.request?.bedType === "I'd like a large bed" ? (
                  <Button variant="outline">
                    <BedSingle className="text-chart-3" /> Large Bed
                  </Button>
                ) : (
                  <Button variant="outline">
                    <BedDouble className="text-chart-2" />
                    Twin Beds
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {item.request?.roomType === "Non-smoking" ? (
                  <Button variant="outline">
                    <CigaretteOff className="text-destructive" />
                    Non-Smoking
                  </Button>
                ) : (
                  <Button variant="outline">
                    <Cigarette />
                    Smoking
                  </Button>
                )}
              </TableCell>
              <TableCell className="pl-11">
                {item.request?.note && (
                  <Button variant="outline" size="icon">
                    <Mail />
                  </Button>
                )}
              </TableCell>
              <TableCell>
                <Badge className="bg-chart-1">{item.statusPaid}</Badge>
              </TableCell>
              <TableCell>{format(item.createdAt, "dd MMM yyyy")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
