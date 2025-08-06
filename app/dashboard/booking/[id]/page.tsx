import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { BookingTableInfo } from "@/components/dashboard/booking/booking-table-info";

interface DashboardBookingIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardBookingIdPage({
  params,
}: DashboardBookingIdPageProps) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.booking + id);

  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  const data = await res.json();

  return <BookingTableInfo booking={data} />;
}
