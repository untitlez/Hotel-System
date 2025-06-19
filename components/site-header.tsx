"use client";

import { useSite } from "@/lib/store/site";

import { SidebarHeader } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Skeleton } from "./ui/skeleton";

export default function SiteHeader() {
  const { title } = useSite();
  return (
    <header className="flex h-16 shrink-0 items- justify-between gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {title ? (
          <SidebarHeader>{title}</SidebarHeader>
        ) : (
          <Skeleton className="h-4 w-20 sm:w-40" />
        )}
      </div>
      <div className="content-center mr-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
