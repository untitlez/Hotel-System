import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import { SortProperty } from "@/components/pages/property/sort-property";
import { CardProperty } from "@/components/pages/property/card-property";
import { NextPageProperty } from "@/components/pages/property/next-page-property";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Routes } from "@/lib/routes";

export default async function PropertyHomePage() {
  const res = await fetch(Config.API_URL + Endpoints.rooms.member + "?limit=9");
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
        <CardProperty data={data.rooms} />
      </div>

      <div className="flex justify-center my-12">
        <Button asChild>
          <Link href={Routes.pages.property}>See Properties More</Link>
        </Button>
      </div>
    </div>
  );
}
