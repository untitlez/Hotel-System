import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { AppBookingForm } from "@/components/pages/booking/app-booking-form";

interface BookingPageProps {
  params: { id: string };
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { id } = await params;
  const responseRoom = await fetch(
    Config.API_URL + Endpoints.room.baseRoom + id
  );
  const roomData = await responseRoom.json();

  const session = await auth();
  const userId = session?.user.id;
  const responseMember = await fetch(Config.API_URL + Endpoints.users + userId);
  const memberData = await responseMember.json();

  return (
    <div className="min-h-screen w-full max-w-screen-xl justify-self-center">
      <h3 className="text-xl font-bold my-8">Confirm your reservation</h3>
      <AppBookingForm
        room={roomData}
        roomId={id}
        userId={memberData.profile.userId}
      />
    </div>
  );
}
