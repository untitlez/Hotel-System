import { DashboardMemberTable } from "@/components/dashboard/member/member-table";

export default async function DashboardMemberPage() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/users-profile`);
  const data = await res.json();

  return <DashboardMemberTable data={data} />;
}
