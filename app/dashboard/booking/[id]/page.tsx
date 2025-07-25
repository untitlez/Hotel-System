import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { BookingTableInfo } from "@/components/dashboard/booking/booking-table-info";

interface BookingIdPageProps {
  params: { id: string };
}

export default async function BookingIdPage({ params }: BookingIdPageProps) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.booking + id);
  const data = await res.json();

  return <BookingTableInfo booking={data} />;
}
