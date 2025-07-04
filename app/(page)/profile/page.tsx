import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import AppSidebarProfile from "@/components/pages/profile/app-sidebar-profile";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth();
  const id = session?.user.id;
  const res = await fetch(Config.API_URL + Endpoints.users + id);
  const data = await res.json();
  return <AppSidebarProfile data={data} />;
}
