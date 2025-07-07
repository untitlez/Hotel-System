import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Heart, Hotel } from "lucide-react";
import Image from "next/image";

const tabItems = [
  {
    tab: 1,
    label: "New South hWales",
    value: [
      {
        location: "Jakarta",
        property: 156,
        image:
          "https://readdy.ai/api/search-image?query=Jakarta%20cityscape%20with%20modern%20skyscrapers%20and%20iconic%20landmarks%2C%20aerial%20view%20of%20business%20district%20with%20tall%20buildings%20and%20city%20lights%2C%20professional%20urban%20photography%20with%20dramatic%20sky%2C%20ultra%20high%20definition&width=600&height=400&seq=9&orientation=landscape",
      },
      {
        location: "Jakarta",
        property: 156,
        image:
          "https://readdy.ai/api/search-image?query=Jakarta%20cityscape%20with%20modern%20skyscrapers%20and%20iconic%20landmarks%2C%20aerial%20view%20of%20business%20district%20with%20tall%20buildings%20and%20city%20lights%2C%20professional%20urban%20photography%20with%20dramatic%20sky%2C%20ultra%20high%20definition&width=600&height=400&seq=9&orientation=landscape",
      },
      {
        location: "Jakarta",
        property: 156,
        image:
          "https://readdy.ai/api/search-image?query=Jakarta%20cityscape%20with%20modern%20skyscrapers%20and%20iconic%20landmarks%2C%20aerial%20view%20of%20business%20district%20with%20tall%20buildings%20and%20city%20lights%2C%20professional%20urban%20photography%20with%20dramatic%20sky%2C%20ultra%20high%20definition&width=600&height=400&seq=9&orientation=landscape",
      },
      {
        location: "Jakarta",
        property: 156,
        image:
          "https://readdy.ai/api/search-image?query=Jakarta%20cityscape%20with%20modern%20skyscrapers%20and%20iconic%20landmarks%2C%20aerial%20view%20of%20business%20district%20with%20tall%20buildings%20and%20city%20lights%2C%20professional%20urban%20photography%20with%20dramatic%20sky%2C%20ultra%20high%20definition&width=600&height=400&seq=9&orientation=landscape",
      },
    ],
  },
  {
    tab: 2,
    label: "Victoria",
    value: [
      {
        location: "Bali",
        property: 124,
        image:
          "https://readdy.ai/api/search-image?query=Bali%20tropical%20paradise%20with%20traditional%20architecture%2C%20lush%20rice%20terraces%2C%20palm%20trees%20and%20ocean%20view%2C%20luxury%20villa%20with%20infinity%20pool%20overlooking%20natural%20landscape%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=10&orientation=landscape",
      },
    ],
  },
  {
    tab: 3,
    label: "Queensland",
    value: [
      {
        location: "Yogyakarta",
        property: 98,
        image:
          "https://readdy.ai/api/search-image?query=Yogyakarta%20cultural%20cityscape%20with%20traditional%20Javanese%20architecture%2C%20ancient%20temples%20and%20palaces%2C%20surrounded%20by%20lush%20greenery%20and%20mountains%20in%20background%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=11&orientation=landscape",
      },
    ],
  },
  {
    tab: 4,
    label: "WesternAustrali",
    value: [
      {
        location: "Surabaya",
        property: 87,
        image:
          "https://readdy.ai/api/search-image?query=Surabaya%20modern%20cityscape%20with%20colonial%20architecture%2C%20bridges%20and%20waterfront%2C%20urban%20skyline%20with%20mix%20of%20historical%20and%20contemporary%20buildings%2C%20professional%20city%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=12&orientation=landscape",
      },
    ],
  },
  {
    tab: 5,
    label: "SouthAustrali",
    value: [
      {
        location: "Bandung",
        property: 76,
        image:
          "https://readdy.ai/api/search-image?query=Bandung%20mountain%20city%20surrounded%20by%20volcanoes%20and%20tea%20plantations%2C%20colonial%20architecture%20with%20art%20deco%20buildings%2C%20modern%20urban%20development%20with%20lush%20green%20backdrop%2C%20professional%20landscape%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=13&orientation=landscape",
      },
    ],
  },
  {
    tab: 6,
    label: "Tasmania",
    value: [
      {
        location: "Lombok",
        property: 65,
        image:
          "https://readdy.ai/api/search-image?query=Lombok%20island%20paradise%20with%20pristine%20beaches%2C%20crystal%20clear%20turquoise%20water%2C%20luxury%20beachfront%20villas%2C%20tropical%20landscape%20with%20palm%20trees%20and%20mountains%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=14&orientation=landscape",
      },
    ],
  },
];

export default function PopularLocationPage() {
  return (
    <div className="w-full space-y-16">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Popular Locations</h2>
        <p className="text-muted-foreground">
          Explore properties in Australia's most sought-after cities and
          regions.
        </p>
      </div>
      <Tabs defaultValue="tab1" className="items-center gap-8">
        <TabsList className="flex flex-wrap sm:flex-nowrap h-full mb-8">
          {tabItems.map((item) => (
            <TabsTrigger
              key={item.tab}
              value={item.label}
              className="cursor-pointer hover:bg-muted-foreground/10"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabItems.map((item) => (
          <TabsContent
            key={item.tab}
            value={item.label}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {item.value.map((val, i) => (
              <div key={i} className="relative aspect-3/2">
                <Image
                  src={val.image}
                  alt={val.location}
                  className="object-cover rounded-xl dark:brightness-75"
                  sizes="33vw"
                  fill
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between items-end">
                  <Button variant="secondary" size="icon">
                    <ArrowUpRight />
                  </Button>
                  <div className="w-full flex justify-between items-center">
                    <Button variant="secondary" size="lg">
                      <Hotel />
                      {val.location}
                    </Button>
                    <Button variant="secondary" size="lg">
                      <span>{val.property} properties</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
