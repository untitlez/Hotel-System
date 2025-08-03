"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";
import { Search } from "lucide-react";
import { toast } from "sonner";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { ResponseUserType } from "@/validators/user.validator";

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

interface MemberTableProps {
  data: ResponseUserType[];
}

export const MemberTable = ({ data }: MemberTableProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState<ResponseUserType[]>(data);

  const onSearch = async () => {
    try {
      const { data } = await axios.get(Config.API_URL + Endpoints.users, {
        params: { search: searchInput },
      });
      setUsers(data);
      if (!searchInput) return;
      toast(`Found ${data.length} results for "${searchInput}"`);
    } catch  {
      toast.warning("Search failed. Please try again.");
    }
  };

  const router = useRouter();
  const handleView = (id: string) => {
    router.push(Routes.dashboard.member + id);
  };

  return (
    <div className="space-y-6 my-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Input
            className="w-100 pl-8 bg-background shadow-md"
            placeholder="Search the table..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && onSearch()}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </div>
        <Button
          variant="secondary"
          size="lg"
          className="bg-background dark:bg-secondary shadow-md"
        >
          Total Rooms : {data.length}
        </Button>
      </div>
      <Table className="border bg-background">
        <TableHeader className="bg-muted-foreground/50">
          <TableRow>
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
          {users.map((item, i) => (
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
