"use client";

import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Search } from "lucide-react";

import { Routes } from "@/lib/routes";
import { ResponseUserType } from "@/validators/user.validator";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface DashboardMemberTableProps {
  data: ResponseUserType[];
}

export const DashboardMemberTable = ({ data }: DashboardMemberTableProps) => {
  const router = useRouter();
  const handleView = (id: string) => {
    router.push(Routes.dashboard.member + id);
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
            <TableHead>No.</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Birthday</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Updated Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={i}
              onClick={() => handleView(item.profile.userId)}
              className="cursor-pointer"
            >
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item.profile.fullName}</TableCell>
              <TableCell>{item.profile.gender}</TableCell>
              <TableCell>
                {format(item.profile.birthday, "dd MMM yyyy")}
              </TableCell>
              <TableCell>{item.profile.address}</TableCell>
              <TableCell>{item.profile.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <Badge className="bg-chart-1">{item.profile.status}</Badge>
              </TableCell>
              <TableCell>
                {format(item.profile.updatedAt, "dd MM yyyy")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
