import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();
  const id = session?.user.id;
  return (
    <div>
      <p>Home Page</p>
      <Button asChild>
        <Link href={`/profile/${id}`}>Profile</Link>
      </Button>
    </div>
  );
}
