import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { auth } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Routes } from "@/lib/routes";

export default async function ProfilePage() {
  const session = await auth();
  const id = session?.user.id;

  const res = await fetch(Config.API_URL + Endpoints.users + id);
  const dataUser = await res.json();
  console.log("USER", dataUser);

  return (
    <div>
      <li>expires:{session?.expires}</li>
      <li>user.email:{session?.user.email}</li>
      <li>user.id:{session?.user.id}</li>
      <li>user.name:{session?.user.name}</li>
      <li>user.role:{session?.user.role}</li>
      <Separator />
      <li>
        profile: {dataUser.status}
        <Button asChild>
          <Link href={Routes.pages.profile + id}>Edit</Link>
        </Button>
      </li>
      <li>booking: {dataUser.booking ?? "No Booking"}</li>
    </div>
  );
}
