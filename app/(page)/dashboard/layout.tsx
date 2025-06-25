import { Inter } from "next/font/google";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/layout/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import SiteHeader from "@/components/dashboard/layout/site-header";
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster position="top-right" expand={true} richColors />
      </SidebarInset>
    </SidebarProvider>
  );
}
