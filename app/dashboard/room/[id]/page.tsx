import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { AppRoomForm } from "@/components/dashboard/room/app-room-form";

interface DashboardRoomIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardRoomIdPage({
  params,
}: DashboardRoomIdPageProps) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.room.baseRoom + id);

  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  const data = await res.json();

  return <AppRoomForm data={data} />;
}
