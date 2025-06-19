"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { navbarItems } from "@/lib/constant/navbarItems";
import { NavHeader } from "./nav-header";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <NavHeader items={navbarItems.navHeader} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navbarItems.navMain} />
        <NavSecondary items={navbarItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navbarItems.navUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
