import { DeleteButton } from "@/components/delete-button";
import { EditProfile } from "@/components/pages/profile/edit-profile";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

export default async function EditProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.users + id);
  const data = await res.json();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full sm:max-w-xl">
        <EditProfile data={data.profile} id={id} />
      </div>
    </div>
  );
}
