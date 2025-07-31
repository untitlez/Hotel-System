"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import {
  Activity,
  ChevronsUpDown,
  Home,
  LogOut,
  TentTree,
  Moon,
  Sun,
} from "lucide-react";

import { Routes } from "@/lib/routes";
import { ResponseUserType } from "@/validators/user.validator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  dashboard: { name: "Dashboard", icon: Activity, path: Routes.dashboard.base },
};

interface SidebarAccountProps {
  data: ResponseUserType;
}

export const SidebarAccount = ({ data }: SidebarAccountProps) => {
  const session = useSession();
  const { isMobile } = useSidebar();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleLogOut = () => {
    signOut({ callbackUrl: Routes.auth.login });
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* Main  */}
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Avatar className="size-8 rounded-lg">
                {session.data?.user.role === "ADMIN" ? (
                  <AvatarImage
                    src={data?.profile.image ?? session.data?.user.image}
                    alt="Profile Image"
                  />
                ) : (
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
                    <TentTree className="size-4" />
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {data?.profile?.fullName}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {data?.email}
                </span>
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
            {/* Sub Menu */}
            {/* Account  */}
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  {session.data?.user.role === "ADMIN" ? (
                    <AvatarImage
                      src={data?.profile.image ?? session.data?.user.image}
                      alt="Profile Image"
                    />
                  ) : (
                    <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
                      <TentTree className="size-4" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {data?.profile?.fullName}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {data?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Menu 1 */}
            <DropdownMenuGroup>
              {data.role === "ADMIN" && (
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={menuItems.dashboard.path}>
                    <menuItems.dashboard.icon />
                    <span>{menuItems.dashboard.name}</span>
                  </Link>
                </DropdownMenuItem>
              )}

              {/* Menu 2 */}
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={menuItems.home.path}>
                  <menuItems.home.icon />
                  <span>{menuItems.home.name}</span>
                </Link>
              </DropdownMenuItem>

              {/* Menu 3 */}
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                {isDark ? (
                  <>
                    <Sun className="size-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="size-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>

            {/* Log out  */}
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
