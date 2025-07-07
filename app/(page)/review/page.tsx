import { FormReview } from "@/components/pages/review/form-review";
import Image from "next/image";

export default function ReviewPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-secondary">
      <div className="relative w-full h-[50vh] lg:h-full">
        <Image
          src="https://readdy.ai/api/search-image?query=Luxury%20apartment%20interior%20with%20modern%20furniture%2C%20floor%20to%20ceiling%20windows%2C%20city%20view%2C%20open%20concept%20living%20space%2C%20professional%20interior%20photography%20with%20perfect%20lighting%2C%20ultra%20high%20definition&width=400&height=300&seq=21&orientation=landscape"
          alt="Aurora Real Estate"
          className="object-cover"
          fill
        />
      </div>
      <FormReview/>
    </div>
  );
}
