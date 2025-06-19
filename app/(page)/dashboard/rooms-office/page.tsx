import { roomType } from "@/validators/roomSchema";

export default async function RoomsOffice() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/rooms`);
  const data = await res.json();

  console.log("data", data);

  return (
    <>
      {data.map((item:roomType) => (
        <li key={item.id}>
          {item.number}-{item.location}-{item.type}-{item.description}-
          {item.pricePerNight}
        </li>
      ))}
    </>
  );
}
