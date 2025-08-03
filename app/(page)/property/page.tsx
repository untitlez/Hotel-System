import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import { Navbar } from "@/components/navbar";
import { PropertySort } from "@/components/pages/property/property-sort";
import { AppCardProperty } from "@/components/pages/property/app-card-property";
import { PropertyNextPage } from "@/components/pages/property/property-next-page";

interface PropertyPageProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function PropertyPage({
  searchParams,
}: PropertyPageProps) {
  const params = await searchParams;
  const query = new URLSearchParams(params);
  const res = await fetch(Config.API_URL + Endpoints.room.member + "?" + query);
  const data = await res.json();

  const isPropertyPage = true;

  return (
    <div className="bg-background w-full max-w-screen-2xl flex flex-col justify-self-center items-center px-4 md:px-8 xl:px-12">
      <nav className="w-full max-w-screen-2xl md:justify-items-center py-4 bg-background">
        <Navbar isPropertyPage={isPropertyPage} />
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
          <PropertySort />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AppCardProperty data={data.rooms} />
        </div>

        <div className="flex justify-center my-12">
          <PropertyNextPage pagination={data.pagination} />
        </div>
      </div>
    </div>
  );
}
