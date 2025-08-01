import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import { Navbar } from "@/components/navbar";
import { SortProperty } from "@/components/pages/property/sort-property";
import { AppCardProperty } from "@/components/pages/property/app-card-property";
import { NextPageProperty } from "@/components/pages/property/next-page-property";

interface PropertyPageProps {
  searchParams: { [key: string]: string };
}

export default async function PropertyPage({
  searchParams,
}: PropertyPageProps) {
  const params = await searchParams;
  const query = new URLSearchParams(params);
  const res = await fetch(
    Config.API_URL + Endpoints.room.member + "?" + query
  );
  const data = await res.json();

  return (
    <>
      <nav className="w-full justify-items-end md:justify-items-center py-4 px-4">
        <Navbar />
      </nav>
      <div className="w-full max-w-screen-xl justify-self-center">
        <div className="flex flex-wrap justify-between items-center gap-6 my-12">
          <div>
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
          <SortProperty />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AppCardProperty data={data.rooms} />
        </div>

        <div className="flex justify-center my-12">
          <NextPageProperty pagination={data.pagination} />
        </div>
      </div>
    </>
  );
}
