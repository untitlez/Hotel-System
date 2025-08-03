import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, TentTree } from "lucide-react";

import { Routes } from "@/lib/routes";
import { Button } from "@/components/ui/button";

const footerItems = {
  brand: {
    header: "Aurora",
    subHeader:
      "Discover premium stays across Australia from coastal escapes to urban luxury. Aurora connects travelers with exceptional accommodations that redefine comfort and style.",
  },

  social: [
    { icon: <Facebook />, link: "https://www.facebook.com/THE.Tlez/#" },
    { icon: <Instagram />, link: "https://www.instagram.com/the.tlez/" },
    { icon: <Github />, link: "https://github.com/untitlez/Hotel-System" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/thetlez/" },
  ],
  quickLinks: {
    title: "Quick Links",
    button: [
      { label: "Search", link: `#${Routes.navbar.id.hero}` },
      { label: "Properties", link: `#${Routes.navbar.id.property}` },
      { label: "Review", link: `#${Routes.navbar.id.review}` },
      { label: "FAQs", link: `#${Routes.navbar.id.fqa}` },
      { label: "Contact", link: "mailto:supanatt.cs@gmail.com" },
    ],
  },
  locations: {
    title: "Popular Locations",
    button: [
      { label: "Sydney", link: Routes.navbar.location.sydney },
      { label: "Melbourne", link: Routes.navbar.location.melbourne },
      { label: "Brisbane", link: Routes.navbar.location.brisbane },
      { label: "Perth", link: Routes.navbar.location.perth },
      { label: "Adelaide", link: Routes.navbar.location.adelaide },
      { label: "GoldCoast", link: Routes.navbar.location.goldCoast },
      { label: "Canberra", link: Routes.navbar.location.canberra },
      { label: "Hobart", link: Routes.navbar.location.hobart },
    ],
  },
  legal: {
    title: `© ${new Date().getFullYear()} Aurora Real Estate. All rights reserved.`,
    button: [
      { label: "Privacy Policy", link: "#" },
      { label: "Cookie Policy", link: "#" },
      { label: "Terms of Service", link: "#" },
    ],
  },
};

export default function FooterPage() {
  return (
    <div className="bg-secondary-foreground dark:bg-secondary px-4 sm:px-16 border-t text-secondary dark:text-secondary-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 ">
            <TentTree />
            <span className="text-xl font-bold">
              {footerItems.brand.header}
            </span>
          </div>
          <p className="text-muted-foreground leading-7 ">
            {footerItems.brand.subHeader}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-secondary">
            {footerItems.social.map((item, i) => (
              <Button
                key={i}
                asChild
                size="icon"
                className="bg-secondary-foreground dark:bg-secondary-foreground dark:text-secondary rounded-full"
              >
                <Link href={item.link} target="_blank">
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-center sm:justify-between lg:justify-end gap-16">
          <div className="grid gap-8">
            <h3 className="text-lg font-bold">
              {footerItems.quickLinks.title}
            </h3>
            <div className="grid">
              {footerItems.quickLinks.button.map((item, i) => (
                <Button
                  asChild
                  key={i}
                  variant="link"
                  className="text-muted-foreground"
                >
                  <Link href={item.link}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            <h3 className="text-lg font-bold">{footerItems.locations.title}</h3>
            <div className="grid">
              {footerItems.locations.button.map((item, i) => (
                <Button
                  asChild
                  key={i}
                  variant="link"
                  className="text-muted-foreground"
                >
                  <Link href={item.link}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-muted-foreground flex flex-col gap-4 md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {footerItems.legal.title}
        </p>
        <div className="flex flex-wrap items-center justify-center">
          {footerItems.legal.button.map((item, i) => (
            <Button
              key={i}
              asChild
              variant="link"
              className="text-muted-foreground"
            >
              <Link href={item.link}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
