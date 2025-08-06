import { redirect } from "next/navigation";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";

import { ProfileBookingsList } from "@/components/pages/profile/profile-bookings-list";
import { ResponseUserType } from "@/validators/user.validator";

interface ProfileIdPageProps {
  data: ResponseUserType;
}

export default async function ProfileIdPage({ data }: ProfileIdPageProps) {
  if (data.role !== "ADMIN") return redirect(Routes.pages.profile);

  //
  // fetch user id & room id
  //
// const bookings = await Promise.all(
//   data.bookings.map(async (booking) => {
//     const roomRes = await fetch(
//       Config.API_URL + Endpoints.room.baseRoom + booking.roomId,
//       {
//         cache: "no-store",
//         credentials: "include",
//       }
//     );

//     const room = await roomRes.json();
//     return { ...booking, room };
//   })
// );

  return <ProfileBookingsList data={data} />;
}
