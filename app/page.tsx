import { Routes } from "@/lib/routes";

import { Navbar } from "@/components/navbar";
import HeroPage from "./(page)/hero/page";
import PropertyHomePage from "./(page)/property/property-home/page";
import PopularLocationPage from "./(page)/popular-location/page";
import ReviewPage from "./(page)/review/page";
import FQAPage from "./(page)/fqa/page";
import CTAPage from "./(page)/cta/page";
import FooterPage from "./(page)/footer/page";
import { BackToTopButton } from "@/components/back-to-top-button";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <nav className="w-full md:justify-items-center py-4 px-4">
        <Navbar />
      </nav>
      <div className="max-w-screen-xl space-y-24 mx-8 2xl:mx-0">
        <section id={Routes.navbar.id.hero}>
          <HeroPage />
        </section>
        <section id={Routes.navbar.id.property}>
          <PropertyHomePage />
        </section>
        {/* <div id={Routes.navbar.id.hero}>
          <PopularLocationPage />
        </div> */}
        <section id={Routes.navbar.id.review}>
          <ReviewPage />
        </section>
        <section id={Routes.navbar.id.fqa}>
          <FQAPage />
        </section>
        <section id={Routes.navbar.id.cta}>
          <CTAPage />
        </section>
        <footer id={Routes.navbar.id.footer}>
          <FooterPage />
        </footer>
      </div>
      <BackToTopButton />
    </div>
  );
}
