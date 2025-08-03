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
    <div className="flex flex-col justify-self-center">
      <nav className="w-full max-w-screen-2xl md:justify-items-center p-4 bg-background">
        <Navbar />
      </nav>
      <div className="max-w-screen-2xl space-y-24 pb-24 px-4 md:px-8 xl:px-12 bg-background">
        <section id={Routes.navbar.id.hero}>
          <HeroPage />
        </section>
        <section id={Routes.navbar.id.property}>
          <PropertyHomePage />
        </section>
        <section id={Routes.navbar.id.location}>
          <PopularLocationPage />
        </section>
        <section id={Routes.navbar.id.review}>
          <ReviewPage />
        </section>
        <section id={Routes.navbar.id.fqa}>
          <FQAPage />
        </section>
      </div>
      <div className="max-w-screen-2xl">
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
