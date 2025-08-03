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

interface BookingTableProps {
  data: ResponseBookingType[];
}

export const BookingTable = ({ data }: BookingTableProps) => {
  const router = useRouter();
  const handleView = (id: string) => {
    router.push(Routes.dashboard.booking + id);
  };

  return (
    <div className="space-y-6 my-4">
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          size="lg"
          className="bg-background dark:bg-secondary shadow-md"
        >
          Total Bookings : {data.length}
        </Button>
      </div>
      <Table className="border bg-background">
        <TableHeader className="bg-muted-foreground/50">
          <TableRow>
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
                  <Button variant="outline" className="shadow-md">
                    <BedSingle className="text-chart-1 dark:text-chart-3" />{" "}
                    Large Bed
                  </Button>
                ) : (
                  <Button variant="outline" className="shadow-md">
                    <BedDouble className="text-chart-2" />
                    Twin Beds
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {item.request?.roomType === "Non-smoking" ? (
                  <Button variant="outline" className="shadow-md">
                    <CigaretteOff className="text-destructive" />
                    Non-Smoking
                  </Button>
                ) : (
                  <Button variant="outline" className="shadow-md">
                    <Cigarette />
                    Smoking
                  </Button>
                )}
              </TableCell>
              <TableCell className="pl-11">
                {item.request?.note && (
                  <Button variant="outline" size="icon" className="shadow-md">
                    <Mail />
                  </Button>
                )}
              </TableCell>
              <TableCell>
                <Badge className="bg-chart-1 shadow-md">
                  {item.statusPaid}
                </Badge>
              </TableCell>
              <TableCell>{format(item.createdAt, "dd MMM yyyy")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
