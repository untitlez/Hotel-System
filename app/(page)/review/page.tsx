import Image from "next/image";

import { auth } from "@/lib/auth";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import { AppReviewForm } from "@/components/pages/review/app-review-form";
import { ReviewBox } from "@/components/pages/review/review-box";

export default async function ReviewPage() {
  const session = await auth();
  if (!session) return;
  const id = session?.user.id;

  const userRes = await fetch(Config.API_URL + Endpoints.users + id, {
    cache: "no-store",
  });
  const userData = await userRes.json();

  const reviewRes = await fetch(Config.API_URL + Endpoints.review, {
    next: { revalidate: 60 },
  });
  const reviewData = await reviewRes.json();

  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative lg:h-full w-full aspect-video bg-muted">
          <Image
            src="https://readdy.ai/api/search-image?query=Luxury%20apartment%20interior%20with%20modern%20furniture%2C%20floor%20to%20ceiling%20windows%2C%20city%20view%2C%20open%20concept%20living%20space%2C%20professional%20interior%20photography%20with%20perfect%20lighting%2C%20ultra%20high%20definition&width=400&height=300&seq=21&orientation=landscape"
            alt="Aurora Real Estate"
            className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none "
            sizes="50vw"
            fill
          />
        </div>
        <AppReviewForm />
      </div>

      {reviewData && (
        <div className="grid lg:grid-cols-3 gap-8">
          <ReviewBox session={session} user={userData} review={reviewData} />
        </div>
      )}
    </div>
  );
}
