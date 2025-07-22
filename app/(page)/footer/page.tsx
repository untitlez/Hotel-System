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
    { icon: <Facebook />, link: "#" },
    { icon: <Instagram />, link: "#" },
    { icon: <Github />, link: "#" },
    { icon: <Linkedin />, link: "#" },
  ],
  quickLinks: {
    title: "Quick Links",
    button: [
      { label: "Search", link: `#${Routes.navbar.id.hero}` },
      { label: "Properties", link: `#${Routes.navbar.id.property}` },
      { label: "Review", link: `#${Routes.navbar.id.review}` },
      { label: "FAQs", link: `#${Routes.navbar.id.fqa}` },
      { label: "Contact", link: `#${Routes.navbar.id.footer}` },
    ],
  },
  locations: {
    title: "Popular Locations",
    button: [
      { label: "Jakarta", link: "#" },
      { label: "Bali", link: "#" },
      { label: "Yogyakarta", link: "#" },
      { label: "Surabaya", link: "#" },
      { label: "Bandung", link: "#" },
      { label: "Lombok", link: "#" },
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
    <div className="bg-secondary px-16 border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-16">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <TentTree />
            <span className="text-xl font-bold">
              {footerItems.brand.header}
            </span>
          </div>
          <p className="text-muted-foreground leading-7 w-2/3">
            {footerItems.brand.subHeader}
          </p>
          <div className="flex items-center gap-6 text-secondary">
            {footerItems.social.map((item, i) => (
              <Button
                key={i}
                asChild
                size="icon"
                className="bg-secondary-foreground dark:bg-secondary-foreground dark:text-secondary rounded-full"
              >
                <Link href={item.link}>{item.icon}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex justify-between lg:justify-end gap-16">
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
        <div className="flex items-center">
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
