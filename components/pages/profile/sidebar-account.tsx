"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Activity, ChevronsUpDown, Home, LogOut, TentTree } from "lucide-react";

import { Routes } from "@/lib/routes";
import { ProfileType } from "@/validators/profile.validator";
import { BookingType } from "@/validators/booking.validator";
import { SessionType } from "@/validators/session.validator ";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = {
  home: { name: "Home Page", icon: Home, path: Routes.pages.home },
  dashboard: { name: "Dashboard", icon: Activity, path: Routes.dashboardBase },
};

interface SidebarAccountProfileProps {
  data: {
    email: string;
    role: "ADMIN" | "MEMBER";
    profile: ProfileType;
    booking: BookingType;
  };
}

export const SidebarAccountProfile = ({ data }: SidebarAccountProfileProps) => {
  const { isMobile } = useSidebar();

  const handleLogOut = () => {
    signOut({ callbackUrl: Routes.auth.login });
  };
  console.log("data", data);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
                  <TentTree className="size-4" />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {data?.profile?.fullName}
                </span>
                <span className="truncate text-xs">{data?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
                    <TentTree className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {data?.profile?.fullName}
                  </span>
                  <span className="truncate text-xs">{data?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {data.role === "ADMIN" && (
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={menuItems.dashboard.path}>
                    <menuItems.dashboard.icon />
                    <span>{menuItems.dashboard.name}</span>
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={menuItems.home.path}>
                  <menuItems.home.icon />
                  <span>{menuItems.home.name}</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogOut}>
              <LogOut />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
