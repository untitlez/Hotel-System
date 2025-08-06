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

  //
  // fetch booking id
  //
  const bookingRes = await fetch(Config.API_URL + Endpoints.booking + id);
  if (!bookingRes.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const booking = await bookingRes.json();

  //
  // fetch user id & room id
  //
  const [userRes, roomRes] = await Promise.all([
    fetch(Config.API_URL + Endpoints.users + booking.userId, {
      cache: "no-store",
      credentials: "include",
    }),
    fetch(Config.API_URL + Endpoints.room.baseRoom + booking.roomId, {
      cache: "no-store",
      credentials: "include",
    }),
  ]);

  if (!userRes.ok || !roomRes.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  const user = await userRes.json();
  const room = await roomRes.json();

  return <BookingTableInfo booking={booking} user={user} room={room} />;
}
