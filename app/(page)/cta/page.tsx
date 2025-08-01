import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/lib/routes";
import { Button } from "@/components/ui/button";

export default function CTAPage() {
  return (
    <div className="relative aspect-video overflow-hidden w-full h-[50vh] bg-muted">
      <Image
        src="https://readdy.ai/api/search-image?query=breathtaking%20modern%20luxury%20villa%20with%20clean%20geometric%20lines%2C%20massive%20glass%20walls%2C%20infinity%20pool%20overlooking%20dramatic%20landscape%2C%20golden%20hour%20professional%20photography%2C%20architectural%20masterpiece%2C%20perfect%20symmetry&width=1440&height=500&seq=10&orientation=landscape"
        alt="Call to action"
        className="object-cover brightness-75"
        sizes="100vw"
        fill
      />
      <div className="absolute inset-0 p-16 flex flex-col justify-center gap-8">
        <h2 className="text-5xl font-medium text-secondary-foreground max-w-sm">
          Find Your Perfect Escape with Us
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <blockquote className="text-sm italic max-w-lg">
            Looking for a place to stay in Australia? Discover top-rated
            accommodations with Aurora from cozy rentals to premium stays. Book
            your perfect home away from home in Australia's most vibrant cities.
          </blockquote>
          <div className="flex flex-1 justify-center lg:justify-end gap-4">
            <Button
              asChild
              variant="default"
              className="cursor-pointer shadow-md"
            >
              <Link href={Routes.pages.property}>Explore Properties</Link>
            </Button>
            <Button variant="outline" className="cursor-pointer shadow-md">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
