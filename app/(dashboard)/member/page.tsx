import { MembersOffice } from "@/components/dashboard/member-office/members-office";

export default async function MembersOfficePage() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/users-profile`);
  const data = await res.json();

  return <MembersOffice data={data} />;
}
