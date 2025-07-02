import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <Button asChild>
        <Link href="profile">Profile</Link>
      </Button>
    </div>
  );
}
