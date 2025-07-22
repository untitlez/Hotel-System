import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { DashboardRoomForm } from "@/components/dashboard/room/room-form";

export default async function DashboardRoomIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.room.baseRoom + id);
  const data = await res.json();

  return <DashboardRoomForm data={data} />;
}
