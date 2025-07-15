"use client";

import Link from "next/link";
import {
  Armchair,
  BookOpen,
  LayoutDashboard,
  Send,
  Settings,
  TentTree,
  User,
} from "lucide-react";

import { Routes } from "@/lib/routes";
import { ResponseUserType } from "@/validators/user.validator";

import { SidebarAccount } from "@/components/sidebar-account";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const sidebarHeader = {
  title: "Hotel System",
  subtitle: "e-commerce",
  icon: TentTree,
};

const sidebarItems = {
  menu1: [
    {
      title: "Dashboard",
      url: Routes.dashboard.base,
      icon: LayoutDashboard,
    },
    {
      title: "Bookings",
      url: Routes.dashboard.booking,
      icon: BookOpen,
    },
    {
      title: "Members",
      url: Routes.dashboard.member,
      icon: User,
    },
    {
      title: "Room",
      url: Routes.dashboard.room,
      icon: Armchair,
    },
  ],

  menu2: [
    {
      title: "Contact",
      url: "#",
      icon: Send,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
  navUser: {
    name: "Shiba Inu",
    email: "shiba@example.com",
    avatar: "/shiba.jpg",
  },
};

interface SidebarMenuDashboardProps {
  data: ResponseUserType;
}

export const SidebarMenuDashboard = ({ data }: SidebarMenuDashboardProps) => {
  return (
    <Sidebar variant="inset">
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenuButton size="lg">
          <Avatar className="size-8 rounded-lg">
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
              <sidebarHeader.icon className="size-4" />
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{sidebarHeader.title}</span>
            <span className="truncate text-xs">{sidebarHeader.subtitle}</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>

      {/* Sidebar Menu 1 */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.menu1.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Sidebar Menu 2 */}
        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            {sidebarItems.menu2.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild size="sm">
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Account */}
      <SidebarFooter>
        <SidebarAccount data={data} />
      </SidebarFooter>
    </Sidebar>
  );
};
