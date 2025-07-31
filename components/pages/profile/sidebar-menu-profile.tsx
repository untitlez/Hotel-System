"use client";

import { format } from "date-fns";
import {
  Calendar1Icon,
  CircleUser,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { ResponseUserType } from "@/validators/user.validator";

import { EditProfile } from "./edit-profile";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface SidebarMenuProfileProps {
  data: ResponseUserType;
}

export const SidebarMenuProfile = ({ data }: SidebarMenuProfileProps) => {
  const sidebarItems = [
    {
      name: "Name",
      icon: CircleUser,
      label: data?.profile.fullName,
    },
    { name: "Email", icon: Mail, label: data?.email },
    { name: "Gender", icon: User, label: data?.profile.gender },
    {
      name: "Birthdate",
      icon: Calendar1Icon,
      label: data?.profile.birthday
        ? format(new Date(data?.profile.birthday), "dd MMM yyyy")
        : "",
    },
    {
      name: "Address",
      icon: MapPin,
      label: data?.profile.address,
    },
    { name: "Phone", icon: Phone, label: data?.profile.phone },
  ];

  return (
    <>
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
            <EditProfile data={data} />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};
