import { Navbar } from "@/components/navbar";
import HeroPage from "./(page)/hero/page";
import PropertyPage from "./(page)/property/page";
import PopularLocationPage from "./(page)/popular-location/page";
import ReviewPage from "./(page)/review/page";
import FQAPage from "./(page)/fqa/page";
import CTAPage from "./(page)/cta/page";
import FooterPage from "./(page)/footer/page";
import { BackToTopButton } from "@/components/back-to-top-button";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <nav className="w-full justify-items-end md:justify-items-center py-4 px-4">
        <Navbar />
      </nav>
      <div className="max-w-screen-xl space-y-24 mx-8 2xl:mx-0">
        <section id="hero">
          <HeroPage />
        </section>
        <section id="property">
          <PropertyPage />
        </section>
        {/* <div id="location">
          <PopularLocationPage />
        </div> */}
        <section id="review">
          <ReviewPage />
        </section>
        <section id="fqa">
          <FQAPage />
        </section>
        <section id="cta">
          <CTAPage />
        </section>
        <footer id="footer">
          <FooterPage />
        </footer>
      </div>
      <BackToTopButton />
    </div>
  );
}
