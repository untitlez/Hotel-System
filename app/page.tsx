import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <Button asChild>
        <Link href="/profile">Profile</Link>
      </Button>
    </div>
  );
}
