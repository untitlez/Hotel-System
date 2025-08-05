import { cookies } from "next/headers";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { MemberTable } from "@/components/dashboard/member/member-table";

export default async function DashboardMemberPage() {
  const cookieStore = cookies();

  const res = await fetch(Config.API_URL + Endpoints.users, {
    cache: "no-store",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  const data = await res.json();

  return <MemberTable data={data} />;
}
