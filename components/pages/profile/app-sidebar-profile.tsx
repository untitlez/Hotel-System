"use client";

import Image from "next/image";

import { ResponseUserType } from "@/validators/user.validator";

import { SidebarMenuProfile } from "./sidebar-menu-profile";
import { SidebarAccount } from "../../sidebar-account";
import { SidebarBreadcrumb } from "../../sidebar-breadcrumb";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

interface AppSidebarProfileProps {
  data: ResponseUserType;
}

export default function AppSidebarProfile({ data }: AppSidebarProfileProps) {
  return (
    <SidebarProvider>
      {/* Profile Image */}
      <Sidebar variant="floating">
        <SidebarHeader className="p-3 space-y-1">
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg">
            <Image
              src="/shiba.jpg"
              alt="Profile Image"
              className="rounded-lg object-cover"
              sizes="(max-width: 640px) 100vw"
              priority={true}
              fill
            />
          </AspectRatio>
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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
