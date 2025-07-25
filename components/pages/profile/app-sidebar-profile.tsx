"use client";

import Image from "next/image";

import { ResponseUserType } from "@/validators/user.validator";

import { SidebarMenuProfile } from "./sidebar-menu-profile";
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
import { BookingListProfile } from "./booking-list-profile";

interface AppSidebarProfileProps {
  data: ResponseUserType;
}

export default function AppSidebarProfile({ data }: AppSidebarProfileProps) {
  return (
    <SidebarProvider>
      {/* Profile Image */}
      <Sidebar variant="floating">
        <SidebarHeader className="p-3 space-y-1">
          <div className="relative aspect-4/3">
            <Image
              src="/shiba.jpg"
              alt="Profile Image"
              className="rounded-lg object-cover"
              sizes="100vw"
              priority={true}
              fill
            />
          </div>
        </SidebarHeader>

        {/* Sidebar Menu */}
        <SidebarContent>
          <SidebarMenuProfile data={data} />
        </SidebarContent>

        {/* Sidebar Account */}
        <SidebarFooter>
          <SidebarAccount data={data} />
        </SidebarFooter>
      </Sidebar>

      {/* Content */}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          <SidebarBreadcrumb />
        </header>
        <div className="grid md:grid-cols-2 gap-4 px-4">
          <BookingListProfile data={data}/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
