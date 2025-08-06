import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { RoomTable } from "@/components/dashboard/room/room-table";

export default async function DashboardRoomPage() {
  const res = await fetch(Config.API_URL + Endpoints.room.admin);
  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const data = await res.json();

  return <RoomTable data={data} />;
}
