import { DashboardRoomForm } from "@/components/dashboard/room/room-form";

export default async function DashboardRoomIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/rooms/${id}`);
  const data = await res.json();

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center">
      <div className="w-full max-w-sm md:max-w-xl">
        <DashboardRoomForm data={data} />
      </div>
    </div>
  );
}
