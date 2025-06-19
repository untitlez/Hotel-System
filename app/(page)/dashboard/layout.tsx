import { Inter } from "next/font/google";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import SiteHeader from "@/components/site-header";

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
