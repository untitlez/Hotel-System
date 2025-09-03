import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { BookingTable } from "@/components/dashboard/booking/booking-table";

export default async function DashboardBookingPage() {
  const res = await fetch(Config.API_URL + Endpoints.booking, {
    cache: "no-store",
  });
  const data = await res.json();

  return <BookingTable data={data} />;
}
