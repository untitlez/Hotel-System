import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { ResponseBookingType } from "@/validators/booking.validator";

import { TotalData } from "@/components/dashboard/chart/total-data";
import { TotalBookingsPrice } from "@/components/dashboard/chart/total-bookings-price";
import { TotalBookingsType } from "@/components/dashboard/chart/total-bookings-type";
import { TotalBookingsLocation } from "@/components/dashboard/chart/total-bookings-location";

export default async function DashboardHomePage() {
  const usersRes = await fetch(Config.API_URL + Endpoints.users);
  const users = await usersRes.json();

  const bookingRes = await fetch(Config.API_URL + Endpoints.booking);
  const bookings = await bookingRes.json();
  const currentBookings = bookings.filter(
    (booking: ResponseBookingType) =>
      new Date(booking.checkInDate).getFullYear() === 2025
  );

  const roomData = await Promise.all(
    currentBookings.map(async (booking: ResponseBookingType) => {
      const res = await fetch(
        Config.API_URL + Endpoints.room.baseRoom + booking.roomId
      );
      const data = await res.json();
      return data;
    })
  );

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <TotalData bookings={bookings} users={users} />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <TotalBookingsPrice data={roomData} />
        <TotalBookingsType data={roomData} />
        <TotalBookingsLocation data={roomData} />
      </div>
    </div>
  );
}
