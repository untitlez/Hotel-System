import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/layout/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/dashboard/layout/site-header";
import { redirect } from "next/navigation";
import { Routes } from "@/lib/routes";

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

  return (
    <SessionProvider session={session}>
      {session && (
        <SidebarProvider className={inter.className}>
          <AppSidebar />
          <SidebarInset>
            <SiteHeader />
            <section className="mx-4">{children}</section>
          </SidebarInset>
        </SidebarProvider>
      )}
    </SessionProvider>
  );
}
