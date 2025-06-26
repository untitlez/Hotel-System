import RoomsOfficeForm from "@/components/dashboard/room-office/room-office-form";

export default async function CreateRoomPage() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center">
      <div className="w-full max-w-sm md:max-w-xl">
        <RoomsOfficeForm />
      </div>
    </div>
  );
}
