import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import AppSidebarProfile from "@/components/pages/profile/app-sidebar";

export default async function EditProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.users + id);
  const data = await res.json();
  return <AppSidebarProfile data={data} />;
}
