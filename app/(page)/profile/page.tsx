import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import AppSidebarProfile from "@/components/pages/profile/app-sidebar-profile";

export default async function ProfilePage() {
  const session = await auth();
  const id = session?.user.id;
  const res = await fetch(Config.API_URL + Endpoints.users + id, {
    cache: "no-store",
  });
  const data = await res.json();
  return <AppSidebarProfile data={data} />;
}
