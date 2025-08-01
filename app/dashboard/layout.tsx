import { Inter } from "next/font/google";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarMenuDashboard } from "@/components/dashboard/layout/sidebar-menu-dashboard";
import { SidebarContentHeader } from "@/components/dashboard/layout/sitebar-content-header";
import { SidebarInset } from "@/components/ui/sidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const id = session?.user.id;
  const res = await fetch(Config.API_URL + Endpoints.users + id);
  const data = await res.json();

  return (
    <SessionProvider session={session}>
      {session && (
        <SidebarProvider className={inter.className}>
          <SidebarMenuDashboard data={data} />

          {/* Sidebar Content */}
          <SidebarInset>
            <SidebarContentHeader />
            <section className="mx-4">{children}</section>
          </SidebarInset>
        </SidebarProvider>
      )}
    </SessionProvider>
  );
}
