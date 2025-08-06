import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/lib/auth";
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
  if (session?.user.role !== "ADMIN") return redirect("/");

  const id = session?.user.id;

  //
  // fetch user id
  //
  const res = await fetch(Config.API_URL + Endpoints.users + id, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const data = await res.json();

  return (
    <SessionProvider session={session}>
      {session && (
        <SidebarProvider className={inter.className}>
          <SidebarMenuDashboard data={data} />

          {/* Sidebar Content */}
          <SidebarInset className="bg-secondary dark:bg-background">
            <SidebarContentHeader />
            <section className="mx-4 mb-8">{children}</section>
          </SidebarInset>
        </SidebarProvider>
      )}
    </SessionProvider>
  );
}
