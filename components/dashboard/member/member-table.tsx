"use client";

import { useRouter } from "next/navigation";

import { Routes } from "@/lib/routes";
import { Search } from "lucide-react";

import { ResponseProfileType } from "@/validators/profile.validator";

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
  "Id",
  "Image",
  "Full Name",
  "Gender",
  "Birthday",
  "Address",
  "Phone",
  "Status",
  "CreatedAt",
  "UpdatedAt",
];

interface DashboardMemberTableProps {
  data: ResponseProfileType[];
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
            {tableHeader.map((item, i) => (
              <TableHead key={i}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {data.map((item, i) => (
            <TableRow
              key={i}
              onClick={() => handleView(item.id)}
              className="cursor-pointer"
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.birthday}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>{item.updatedAt}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};
