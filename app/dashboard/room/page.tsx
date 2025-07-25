import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { DashboardRoomTable } from "@/components/dashboard/room/room-table";

export default async function DashboardRoomPage() {
  const res = await fetch(Config.API_URL + Endpoints.room.admin);
  const data = await res.json();
  return <DashboardRoomTable data={data} />;
}
