import { Navbar } from "@/components/navbar";
import HeroPage from "./(page)/hero/page";
import PropertyPage from "./(page)/property/page";
import PopularLocationPage from "./(page)/popular-location/page";
import ReviewPage from "./(page)/review/page";
import FQAPage from "./(page)/fqa/page";
import CTAPage from "./(page)/cta/page";
import FooterPage from "./(page)/footer/page";

export default async function HomePage() {
  return (
    <div className="max-w-screen-xl space-y-24 mx-8 2xl:mx-0">
      <Navbar />
      <HeroPage />
      <div id="property">
        <PropertyPage />
      </div>
      {/* <PopularLocationPage /> */}
      <ReviewPage />
      <FQAPage />
      <CTAPage />
      <FooterPage />
    </div>
  );
}
