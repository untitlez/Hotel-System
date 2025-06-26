import { Inter } from "next/font/google";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/layout/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import SiteHeader from "@/components/dashboard/layout/site-header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className={inter.className}>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <section className="mx-4">{children}</section>
      </SidebarInset>
    </SidebarProvider>
  );
}
