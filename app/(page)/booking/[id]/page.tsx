import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";

import { AppBookingForm } from "@/components/pages/booking/app-booking-form";
import { CountDown } from "@/components/pages/booking/count-down";
import { BookingBack } from "@/components/pages/booking/booking-back";

interface BookingPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { id } = await params;
  const session = await auth();
  if (!session) return redirect(Routes.auth.login);
  const userId = session?.user.id;

  //
  // fetch room id
  //
  const responseRoom = await fetch(
    Config.API_URL + Endpoints.room.baseRoom + id,
  );
  if (!responseRoom.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const roomData = await responseRoom.json();

  //
  // fetch user id
  //
  const responseMember = await fetch(Config.API_URL + Endpoints.users + userId);
  if (!responseMember.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const memberData = await responseMember.json();

  const timeOut = 5;

  return (
    <div className="min-h-screen w-full max-w-screen-xl justify-self-center py-12 px-4 md:px-8 xl:px-12">
      <div className="flex flex-wrap-reverse sm:justify-between mb-12 gap-4">
        <div className="flex items-center gap-1.5">
          <BookingBack />
          <h3 className="text-xl font-bold">Confirm your reservation</h3>
        </div>
        <CountDown minute={timeOut} />
      </div>
      <AppBookingForm
        room={roomData}
        roomId={id}
        userId={memberData.profile.userId}
      />
    </div>
  );
}
