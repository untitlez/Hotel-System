import { Config } from "@/lib/config";
import { DashboardRoomTable } from "@/components/dashboard/room/room-table";
import { Endpoints } from "@/lib/endpoints";

export default async function DashboardRoomPage() {
  const res = await fetch(Config.API_URL + Endpoints.rooms);
  const data = await res.json();
  return (
    <div>
      <DashboardRoomTable data={data} />
    </div>
  );
}
