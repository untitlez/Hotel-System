import Link from "next/link";

import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";

import { AppCardProperty } from "@/components/pages/property/app-card-property";
import { Button } from "@/components/ui/button";

export default async function PropertyHomePage() {
  const session = await auth();

  //
  // fetch rooms member
  //
  const res = await fetch(Config.API_URL + Endpoints.room.member + "?limit=9", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  const data = await res.json();

  return (
    <div>
      <div className="flex flex-col my-12">
        <h2 className="text-2xl font-bold">Residence in Australia</h2>
        <p className=" mt-1">
          We found
          <span className="font-medium text-primary">
            {" "}
            {data.pagination.total}{" "}
          </span>
          properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppCardProperty data={data.rooms} session={session} />
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild>
          <Link href={Routes.pages.property}>See Properties More</Link>
        </Button>
      </div>
    </div>
  );
}
