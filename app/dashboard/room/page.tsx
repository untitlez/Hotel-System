import { DashboardRoomTable } from "@/components/dashboard/room/room-table";

export default async function DashboardRoomPage() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/rooms`);
  const data = await res.json();
  return (
    <div>
      <DashboardRoomTable data={data} />
    </div>
  );
}
