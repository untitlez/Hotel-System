import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";

import AppSidebarProfile from "@/components/pages/profile/app-sidebar-profile";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return redirect(Routes.auth.login);
  const id = session?.user.id;

  //
  // fetch user id
  //
  const res = await fetch(Config.API_URL + Endpoints.users + id, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  const data = await res.json();

  return <AppSidebarProfile data={data} />;
}
