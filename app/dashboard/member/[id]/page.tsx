import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { MemberTableInfo } from "@/components/dashboard/member/member-table-info";

interface DashboardMemberIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardMemberIdPage({
  params,
}: DashboardMemberIdPageProps) {
  const { id } = await params;
  const res = await fetch(Config.API_URL + Endpoints.users + id, {
    cache: "no-store",
  });
  const data = await res.json();

  return <MemberTableInfo data={data} />;
}
