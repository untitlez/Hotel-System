import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { DashboardBookingTable } from "@/components/dashboard/booking/booking-table";

export default async function DashboardBookingPage() {
  const res = await fetch(Config.API_URL + Endpoints.users);
  const data = await res.json();

  return <DashboardBookingTable data={data} />;
}
