"use client";

import Image from "next/image";
import {
  Calendar1Icon,
  CircleUser,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { ProfileType } from "@/validators/profile.validator";
import { BookingType } from "@/validators/booking.validator";
import { SessionType } from "@/validators/session.validator ";

import { EditProfile } from "./edit-profile";
import { SidebarAccountProfile } from "./sidebar-account";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarFooter,
  SidebarGroupContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AppSidebarProfileProps {
  data: {
    email: string;
    role: "ADMIN" | "MEMBER";
    profile: ProfileType;
    booking: BookingType;
  };
  session: SessionType;
}

export default function AppSidebarProfile({
  data,
  session,
}: AppSidebarProfileProps) {
  const sidebarItems = [
    {
      name: "Name",
      icon: CircleUser,
      label: data?.profile.fullName,
    },
    { name: "Email", icon: Mail, label: data?.email },
    { name: "Gender", icon: User, label: data?.profile.gender },
    {
      name: "Birthday",
      icon: Calendar1Icon,
      label: new Date(data?.profile.birthday).toLocaleDateString(),
    },
    {
      name: "Address",
      icon: MapPin,
      label: data?.profile.address,
    },
    { name: "Phone", icon: Phone, label: data?.profile.phone },
  ];

  return (
    <SidebarProvider>
      {/* Profile Image */}
      <Sidebar variant="floating">
        <SidebarHeader className="p-3 space-y-1">
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg">
            <Image
              fill
              src="/shiba.jpg"
              alt="Profile Image"
              className="rounded-lg object-cover"
              sizes="100vw"
            />
          </AspectRatio>
        </SidebarHeader>
        <SidebarContent>
          {/* Sidebar Main */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem
                    key={item.name}
                    className="flex items-center gap-1.5 py-1.5 px-2"
                  >
                    <item.icon className="size-4" />
                    <span>{item.name}</span>
                    <span className="flex-1 text-center text-muted-foreground">
                      {item.label}
                    </span>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                <EditProfile />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        {/* Sidebar Account */}
        <SidebarFooter>
          <SidebarAccountProfile data={data} session={session} />
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
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
