"use client";

import Image from "next/image";

import { ResponseUserType } from "@/validators/user.validator";

import { ProfileSidebarMenu } from "./profile-sidebar-menu";
import { ProfileBookingsList } from "./profile-bookings-list";
import { SidebarAccount } from "../../sidebar-account";
import { SidebarBreadcrumb } from "../../sidebar-breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ResponseBookingType } from "@/validators/booking.validator";
import { ResponseRoomType } from "@/validators/room.validator";

interface AppSidebarProfileProps {
  data: ResponseUserType;
  bookings: {
    booking: ResponseBookingType;
    room: ResponseRoomType;
  }[];
}

export default function AppSidebarProfile({
  data,
  bookings,
}: AppSidebarProfileProps) {
  return (
    <SidebarProvider>
      {/* Profile Image */}
      <Sidebar variant="floating">
        <SidebarHeader className="p-3 space-y-1">
          <div className="relative aspect-4/3 bg-muted rounded-lg">
            <Image
              src={data.profile?.image ?? "/shiba.jpg"}
              alt="Profile Image"
              className="object-cover rounded-lg"
              sizes="30vw"
              fill
            />
          </div>
        </SidebarHeader>

        {/* Sidebar Menu */}
        <SidebarContent>
          <ProfileSidebarMenu data={data} />
        </SidebarContent>

        {/* Sidebar Account */}
        <SidebarFooter>
          <SidebarAccount data={data} />
        </SidebarFooter>
      </Sidebar>

      {/* Content */}
      <SidebarInset className="bg-secondary dark:bg-background">
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          <SidebarBreadcrumb />
        </header>
        <div className="grid md:grid-cols-2 gap-4 px-4">
          <ProfileBookingsList bookings={bookings} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
