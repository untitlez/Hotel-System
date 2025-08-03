import Image from "next/image";
import { SearchBox } from "@/components/pages/hero/search-box";

const heroItems = {
  heroImage:
    "https://readdy.ai/api/search-image?query=Stunning%20modern%20luxury%20villa%20with%20large%20glass%20windows%20and%20wooden%20elements%2C%20infinity%20pool%20overlooking%20natural%20landscape%2C%20architectural%20masterpiece%20with%20clean%20lines%20and%20open%20concept%20design%2C%20professional%20twilight%20photography%20with%20perfect%20gradient%20lighting%2C%20dramatic%20sky%20with%20soft%20clouds%2C%20ultra%20high%20definition&width=1440&height=600&seq=7&orientation=landscape",
};

export default function HeroPage() {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-24 gap-16 lg:gap-0">
        <div className="max-w-md">
          <h1 className="text-6xl font-extrabold tracking-tight text-balance">
            Find Your Perfect Escape in Australia
          </h1>
        </div>
        <div className="flex flex-col justify-between items-end text-end">
          <p className="leading-7">
            © {new Date().getFullYear()} Aurora Retreats. All rights reserved.
          </p>
          <blockquote className="text-sm italic w-2/3">
            Discover premium properties with exceptional design and unparalleled
            comfort across Australia's most desirable locations.
          </blockquote>
        </div>
      </div>
      <div className="relative h-[50vh]">
        <Image
          src={heroItems.heroImage}
          alt="Cover Image"
          className="object-cover rounded-3xl"
          priority={true}
          sizes="100vw"
          fill
        />
        <div className="absolute bottom-0 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
