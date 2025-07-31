"use client";

import { format } from "date-fns";
import Image from "next/image";

import { ResponseUserType } from "@/validators/user.validator";

import { MemberCardInfo } from "./member-card-info";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface MemberTableInfoProps {
  data: ResponseUserType;
}
export const MemberTableInfo = ({ data }: MemberTableInfoProps) => {
  return (
    <Card className="max-w-screen-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Member Info :</CardTitle>
      </CardHeader>
      <CardContent className="grid sm:grid-cols-2 justify-center gap-8 text-sm">
        <div className="relative aspect-square w-full max-w-xs bg-muted rounded-md overflow-hidden shadow-lg mb-6">
          {data && (
            <Image
              src={data.profile.image ?? "/shiba.jpg"}
              alt="Profile Image"
              className="object-cover"
              sizes="50vw"
              fill
            />
          )}
        </div>

        <div className="grid grid-cols-2">
          {/* Title */}
          <div className="grid grid-rows-8 items-center">
            <p>Full Name</p>
            <p>Gender</p>
            <p>Birthday</p>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
            <p>Status</p>
            <p>Updated Date</p>
          </div>
          {/* Detail */}
          <div className="grid grid-rows-8 items-center">
            <p>{data?.profile.fullName}</p>
            <p>{data?.profile.gender}</p>
            <p> {format(data?.profile.birthday, "dd MMM yyyy")}</p>
            <p>{data?.profile.address}</p>
            <p>{data?.profile.phone}</p>
            <p className="truncate">{data?.email}</p>
            <Badge className="bg-chart-1">{data?.profile.status}</Badge>
            <p>{format(data?.profile.updatedAt, "dd MMM yyyy")}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <MemberCardInfo data={data} />
      </CardFooter>
    </Card>
  );
};
