import {
  Armchair,
  BookOpen,
  Command,
  LayoutDashboard,
  Send,
  Settings,
  User,
} from "lucide-react";

export const navbarItems = {
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
