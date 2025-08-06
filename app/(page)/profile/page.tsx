import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { ResponseBookingType } from "@/validators/booking.validator";

import AppSidebarProfile from "@/components/pages/profile/app-sidebar-profile";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const session = await auth();
  if (!session) return redirect(Routes.auth.login);
  const id = session?.user.id;

  //
  // fetch user id
  //
  const userRes = await fetch(Config.API_URL + Endpoints.users + id, {
    cache: "no-store",
  });
  if (!userRes.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const data = await userRes.json();

  //
  // fetch bookings & rooms
  //
  const bookingsData = await Promise.all(
    data.bookings.map(async (booking: ResponseBookingType) => {
      const roomRes = await fetch(
        Config.API_URL + Endpoints.room.baseRoom + booking.roomId,
        {
          cache: "no-store",
          headers: {
            Cookie: cookieStore.toString(),
          },
        }
      );

      const room = await roomRes.json();
      return { booking, room };
    })
  );

  return <AppSidebarProfile data={data} bookings={bookingsData} />;
}
