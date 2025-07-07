import { CardProperty } from "@/components/pages/property/card-property";
import { LoadMoreProperty } from "@/components/pages/property/loadmore-property";
import { SortProperty } from "@/components/pages/property/sort-property";

const propertyItem = [
  {
    id: 1,
    name: "Serenity Heights Villas",
    price: 250000,
    location: "Bogor, Tengah",
    bedrooms: 8,
    bathrooms: 2.5,
    area: 410,
    image:
      "https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20with%20wooden%20facade%20and%20large%20glass%20windows%2C%20featuring%20a%20minimalist%20design%20with%20clean%20lines%2C%20surrounded%20by%20lush%20greenery%20and%20with%20a%20swimming%20pool%2C%20sunset%20lighting%2C%20architectural%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=1&orientation=landscape",
  },
  {
    id: 2,
    name: "Emerald Bay Residences",
    price: 250000,
    location: "Gunungkidul, Yogyakarta",
    bedrooms: 8,
    bathrooms: 2.5,
    area: 410,
    image:
      "https://readdy.ai/api/search-image?query=Contemporary%20modular%20wooden%20homes%20in%20a%20row%2C%20modern%20architectural%20design%20with%20natural%20wood%20facades%20and%20large%20windows%2C%20surrounded%20by%20green%20landscape%2C%20daytime%20lighting%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=2&orientation=landscape",
  },
  {
    id: 3,
    name: "Palm Grove Estate",
    price: 250000,
    location: "Semarang, Selatan",
    bedrooms: 8,
    bathrooms: 2.5,
    area: 410,
    image:
      "https://readdy.ai/api/search-image?query=Modern%20minimalist%20villa%20with%20flat%20roof%20and%20wooden%20elements%2C%20large%20glass%20windows%2C%20outdoor%20terrace%20with%20furniture%2C%20autumn%20trees%20in%20background%2C%20situated%20on%20rocky%20terrain%2C%20professional%20architectural%20photography&width=600&height=400&seq=3&orientation=landscape",
  },
  {
    id: 4,
    name: "Golden Horizon Residences",
    price: 250000,
    location: "Malang, Barat",
    bedrooms: 8,
    bathrooms: 2.5,
    area: 410,
    image:
      "https://readdy.ai/api/search-image?query=Row%20of%20modern%20wooden%20cabin-style%20houses%20with%20triangular%20roofs%2C%20contemporary%20architectural%20design%2C%20clean%20lines%2C%20large%20windows%2C%20wooden%20facades%2C%20arranged%20in%20sequence%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=4&orientation=landscape",
  },
  {
    id: 5,
    name: "Sapphire Riverfront Villas",
    price: 250000,
    location: "Jakarta, Selatan",
    bedrooms: 8,
    bathrooms: 2.5,
    area: 410,
    image:
      "https://readdy.ai/api/search-image?query=Row%20of%20modern%20townhouses%20with%20flat%20roofs%20and%20wooden%20accents%2C%20contemporary%20design%20with%20large%20windows%20and%20balconies%2C%20clean%20architectural%20lines%2C%20professional%20real%20estate%20photography%20in%20daylight&width=600&height=400&seq=5&orientation=landscape",
  },
  {
    id: 6,
    name: "Sunset Cliffside Homes",
    price: 250000,
    location: "Surabaya, Timur",
    bedrooms: 8,
    bathrooms: 2.5,
    area: 410,
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20beachfront%20villa%20with%20wooden%20deck%2C%20outdoor%20furniture%2C%20ocean%20view%2C%20modern%20architectural%20design%20with%20large%20windows%20and%20wooden%20elements%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=6&orientation=landscape",
  },
  {
    id: 7,
    name: "Modern Beach Residence",
    location: "Beachside, Kagoshima",
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    area: 245,
    image:
      "https://readdy.ai/api/search-image?query=modern%20luxury%20beach%20house%20with%20wooden%20elements%20and%20large%20glass%20windows%2C%20minimalist%20architecture%2C%20clean%20lines%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20property&width=400&height=250&seq=1&orientation=landscape",
  },
  {
    id: 8,
    name: "Mountain View Residence",
    location: "Hillside, Kagoshima",
    price: 920000,
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    image:
      "https://readdy.ai/api/search-image?query=luxury%20mountain%20house%20with%20wooden%20facade%20and%20large%20windows%2C%20modern%20architecture%2C%20natural%20surroundings%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20property%20with%20mountain%20backdrop&width=400&height=250&seq=2&orientation=landscape",
  },
  {
    id: 9,
    name: "Palm View Estate",
    location: "Coastal, Kagoshima",
    price: 975000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 280,
    image:
      "https://readdy.ai/api/search-image?query=luxury%20coastal%20house%20with%20palm%20trees%2C%20modern%20minimalist%20architecture%2C%20large%20terrace%2C%20infinity%20pool%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20beachfront%20property&width=400&height=250&seq=3&orientation=landscape",
  },
  {
    id: 10,
    name: "Garden Lights Villa Complex",
    location: "Central, Kagoshima",
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    area: 185,
    image:
      "https://readdy.ai/api/search-image?query=modern%20villa%20complex%20with%20wooden%20elements%2C%20minimalist%20architecture%2C%20beautiful%20garden%20lighting%2C%20multiple%20units%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20property%20development&width=400&height=250&seq=4&orientation=landscape",
  },
  {
    id: 11,
    name: "Urban Modern Residence",
    location: "Downtown, Kagoshima",
    price: 890000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 210,
    image:
      "https://readdy.ai/api/search-image?query=luxury%20urban%20residence%20with%20modern%20architecture%2C%20clean%20lines%2C%20large%20windows%2C%20rooftop%20terrace%2C%20city%20backdrop%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20downtown%20property&width=400&height=250&seq=5&orientation=landscape",
  },
  {
    id: 12,
    name: "Seaside Retreat Home",
    location: "Coastal, Kagoshima",
    price: 950000,
    bedrooms: 5,
    bathrooms: 4,
    area: 340,
    image:
      "https://readdy.ai/api/search-image?query=luxury%20seaside%20retreat%20with%20wooden%20deck%2C%20infinity%20pool%2C%20glass%20walls%2C%20ocean%20view%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20beachfront%20property%20with%20natural%20surroundings&width=400&height=250&seq=6&orientation=landscape",
  },
  {
    id: 13,
    name: "Elegant Terrace Residence",
    location: "Suburban, Kagoshima",
    price: 825000,
    bedrooms: 4,
    bathrooms: 3,
    area: 260,
    image:
      "https://readdy.ai/api/search-image?query=elegant%20modern%20house%20with%20large%20terrace%2C%20wooden%20elements%2C%20minimalist%20architecture%2C%20landscaped%20garden%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20suburban%20property%20with%20clean%20design&width=400&height=250&seq=7&orientation=landscape",
  },
  {
    id: 14,
    name: "Urban Forest Estate",
    location: "Park District, Kagoshima",
    price: 940000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 295,
    image:
      "https://readdy.ai/api/search-image?query=modern%20forest%20house%20with%20wooden%20facade%2C%20surrounded%20by%20trees%2C%20large%20windows%2C%20natural%20light%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20property%20with%20nature%20integration&width=400&height=250&seq=8&orientation=landscape",
  },
  {
    id: 15,
    name: "Waterfront Premium Home",
    location: "Riverside, Kagoshima",
    price: 975000,
    bedrooms: 5,
    bathrooms: 4.5,
    area: 380,
    image:
      "https://readdy.ai/api/search-image?query=luxury%20waterfront%20home%20with%20modern%20architecture%2C%20wooden%20deck%2C%20large%20windows%2C%20water%20reflection%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography%2C%20no%20people%2C%20high-end%20riverside%20property&width=400&height=250&seq=9&orientation=landscape",
  },
];

export default function PropertyPage() {
  return (
    <div>
      <div className="flex justify-between items-center my-12">
        <div>
          <h2 className="text-2xl font-bold">Residence in Yogyakarta</h2>
          <p className=" mt-1">
            We found<span className="font-medium text-primary"> 242 </span>
            properties
          </p>
        </div>
        <SortProperty />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardProperty propertyItem={propertyItem} />
      </div>

      <div className="flex justify-center my-12">
        <LoadMoreProperty />
      </div>
    </div>
  );
}
