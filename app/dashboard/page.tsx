import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { ResponseBookingType } from "@/validators/booking.validator";

import { BookingsTypeTotal } from "@/components/dashboard/chart/bookings-type-total";
import { BookingsLocationTotal } from "@/components/dashboard/chart/bookings-location-total";
import { BookingsPriceTotal } from "@/components/dashboard/chart/bookings-price-total";
import { TotalChart } from "@/components/dashboard/chart/total-chart";

export default async function DashboardHomePage() {
  const res = await fetch(Config.API_URL + Endpoints.booking);
  const bookings = await res.json();
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
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <BookingsTypeTotal data={roomData} />
        <BookingsLocationTotal data={roomData} />
        <BookingsPriceTotal data={roomData} />
      </div>
      <TotalChart rooms={roomData} bookings={currentBookings} />
    </div>
  );
}
