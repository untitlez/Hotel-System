import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "Sydney",
    description:
      "Australia's largest city featuring the iconic Opera House, Harbour Bridge, and beautiful beaches like Bondi. A perfect blend of urban sophistication and coastal lifestyle.",
    image:
      "https://readdy.ai/api/search-image?query=Sydney%20city%20skyline%20panorama%20with%20Opera%20House%20and%20Harbour%20Bridge%20during%20golden%20sunset%2C%20modern%20urban%20architecture%20meets%20harbor%20waters%2C%20professional%20cityscape%20photography&width=400&height=300&seq=sydney-1&orientation=landscape",
  },
  {
    id: 2,
    name: "Melbourne",
    description:
      "Cultural capital known for its artistic laneways, world-class coffee scene, sporting events, and vibrant arts community. A city of hidden treasures and elegant architecture.",
    image:
      "https://readdy.ai/api/search-image?query=Melbourne%20city%20skyline%20at%20dusk%20with%20Yarra%20River%20reflection%2C%20modern%20skyscrapers%20and%20historic%20buildings%2C%20trams%20and%20street%20culture%2C%20urban%20lifestyle%20photography&width=400&height=300&seq=melbourne-1&orientation=landscape",
  },
  {
    id: 3,
    name: "Brisbane",
    description:
      "Subtropical capital of Queensland with riverside gardens, outdoor lifestyle, and modern cultural precincts. Gateway to the Gold Coast and Sunshine Coast.",
    image:
      "https://readdy.ai/api/search-image?query=Brisbane%20city%20skyline%20with%20Story%20Bridge%20and%20Brisbane%20River%20at%20twilight%2C%20modern%20architecture%2C%20riverside%20parklands%2C%20subtropical%20urban%20landscape%20photography&width=400&height=300&seq=brisbane-1&orientation=landscape",
  },
  {
    id: 4,
    name: "Perth",
    description:
      "Sun-soaked capital of Western Australia with pristine beaches, Kings Park, and Swan River views. Known for its relaxed lifestyle and natural beauty.",
    image:
      "https://readdy.ai/api/search-image?query=Perth%20city%20skyline%20reflection%20in%20Swan%20River%20at%20sunset%2C%20modern%20buildings%2C%20Kings%20Park%20greenery%2C%20beautiful%20waterfront%20scene%2C%20urban%20landscape%20photography&width=400&height=300&seq=perth-1&orientation=landscape",
  },
  {
    id: 5,
    name: "Adelaide",
    description:
      "City of churches surrounded by wine regions, featuring colonial architecture, cultural festivals, and beautiful parklands. A blend of history and modern living.",
    image:
      "https://readdy.ai/api/search-image?query=Adelaide%20city%20skyline%20with%20historic%20architecture%20and%20parklands%2C%20church%20spires%2C%20garden%20squares%2C%20cultural%20precinct%2C%20urban%20heritage%20photography&width=400&height=300&seq=adelaide-1&orientation=landscape",
  },
  {
    id: 6,
    name: "Gold Coast",
    description:
      "Famous for its surf beaches, high-rise skyline, and theme parks. A paradise for beach lovers and entertainment seekers with year-round sunshine.",
    image:
      "https://readdy.ai/api/search-image?query=Gold%20Coast%20skyline%20with%20Surfers%20Paradise%20beach%20and%20high%20rise%20buildings%2C%20ocean%20waves%2C%20beachfront%20lifestyle%2C%20coastal%20city%20photography&width=400&height=300&seq=goldcoast-1&orientation=landscape",
  },
  {
    id: 7,
    name: "Canberra",
    description:
      "Australia's purpose-built capital city, home to national museums, galleries, and Parliament House. A planned city with lake views and seasonal charm.",
    image:
      "https://readdy.ai/api/search-image?query=Canberra%20Parliament%20House%20with%20Lake%20Burley%20Griffin%20reflection%2C%20modern%20government%20architecture%2C%20autumn%20trees%2C%20national%20capital%20photography&width=400&height=300&seq=canberra-1&orientation=landscape",
  },
  {
    id: 8,
    name: "Hobart",
    description:
      "Tasmania's historic waterfront capital with Mount Wellington backdrop, famous for its food scene, art galleries, and colonial heritage.",
    image:
      "https://readdy.ai/api/search-image?query=Hobart%20waterfront%20with%20historic%20sandstone%20buildings%2C%20sailing%20boats%2C%20Mount%20Wellington%20backdrop%2C%20Tasmania%20capital%20city%20photography&width=400&height=300&seq=hobart-1&orientation=landscape",
  },
  {
    id: 9,
    name: "Darwin",
    description:
      "Tropical capital of the Northern Territory, featuring multicultural markets, harbor sunsets, and rich indigenous culture. Gateway to natural wonders.",
    image:
      "https://readdy.ai/api/search-image?query=Darwin%20waterfront%20with%20tropical%20sunset%2C%20modern%20marina%2C%20palm%20trees%2C%20northern%20territory%20capital%20city%20photography&width=400&height=300&seq=darwin-1&orientation=landscape",
  },
  {
    id: 10,
    name: "Newcastle",
    description:
      "Coastal city known for its beautiful beaches, historic architecture, and vibrant arts scene. A perfect blend of industrial heritage and modern coastal living.",
    image:
      "https://readdy.ai/api/search-image?query=Newcastle%20NSW%20coastal%20city%20with%20historic%20architecture%2C%20beautiful%20beaches%2C%20harbor%20views%2C%20modern%20urban%20lifestyle%20photography&width=400&height=300&seq=newcastle-1&orientation=landscape",
  },
  {
    id: 11,
    name: "Wollongong",
    description:
      "Scenic coastal city south of Sydney, featuring beautiful beaches, sea cliff bridge, and rich industrial heritage transformed into modern living.",
    image:
      "https://readdy.ai/api/search-image?query=Wollongong%20coastal%20city%20with%20sea%20cliff%20bridge%2C%20beach%20views%2C%20escarpment%20backdrop%2C%20coastal%20urban%20landscape%20photography&width=400&height=300&seq=wollongong-1&orientation=landscape",
  },
  {
    id: 12,
    name: "Cairns",
    description:
      "Tropical gateway to the Great Barrier Reef and Daintree Rainforest, known for its laid-back atmosphere and adventure activities.",
    image:
      "https://readdy.ai/api/search-image?query=Cairns%20marina%20with%20tropical%20mountains%20backdrop%2C%20palm%20trees%2C%20reef%20boats%2C%20northern%20Queensland%20coastal%20city%20photography&width=400&height=300&seq=cairns-1&orientation=landscape",
  },
];
export default function PopularLocationPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center text-center gap-6 py-12">
        <h2 className="text-3xl font-bold">Popular Locations</h2>
        <p className="text-muted-foreground max-w-3xl">
          Discover the most iconic destinations across Australia, from
          world-famous landmarks to hidden natural wonders. Each location offers
          unique experiences and unforgettable memories waiting to be explored.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, i) => (
          <div
            key={i}
            className="relative aspect-3/4 bg-muted rounded-md overflow-hidden shadow-lg group"
          >
            <Image
              src={location.image}
              alt={location.name}
              className="object-cover md:group-hover:scale-105 transform duration-700 delay-100"
              sizes="30vw"
              fill
            />

            <div className="absolute inset-0 z-0 flex flex-col text-end justify-end gap-3 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-xl font-bold text-white whitespace-nowrap">
                {location.name}
              </h3>
              <p className="text-sm">{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
