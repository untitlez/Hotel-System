"use client";

import {
  Armchair,
  BookOpen,
  Command,
  LayoutDashboard,
  Send,
  Settings,
  User,
} from "lucide-react";

import { NavHeader } from "./nav-header";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navbarItems = {
  navHeader: {
    title: "Hotel System",
    subtitle: "e-commerce",
    url: "#",
    icon: Command,
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Bookings",
      url: "/dashboard/bookings-office",
      icon: BookOpen,
    },
    {
      title: "Members",
      url: "/dashboard/members-office",
      icon: User,
    },
    {
      title: "Rooms",
      url: "/dashboard/rooms-office",
      icon: Armchair,
    },
  ],

  navSecondary: [
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

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
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
};
