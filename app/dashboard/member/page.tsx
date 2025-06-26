import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { DashboardMemberTable } from "@/components/dashboard/member/member-table";

export default async function DashboardMemberPage() {
  const res = await fetch(Config.API_URL + Endpoints.users);
  const data = await res.json();

  return <DashboardMemberTable data={data} />;
}
