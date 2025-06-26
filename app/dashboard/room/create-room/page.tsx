import { DashboardRoomForm } from "@/components/dashboard/room/room-form";

export default async function DashboardCreateRoomPage() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center">
      <div className="w-full max-w-sm md:max-w-xl">
        <DashboardRoomForm />
      </div>
    </div>
  );
}
