import { RoomsOffice } from "@/components/dashboard/room-office/room-office";

export default async function RoomsOfficePage() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/rooms`);
  const data = await res.json();
  return (
    <div>
      <RoomsOffice data={data} />
    </div>
  );
}
