"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { TentTree } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Routes } from "@/lib/routes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navHome = {
  trigger: "Home",
  headerContent: {
    icon: TentTree,
    title: "Aurora",
    description: "Find Your Dream Home in Australia",
  },
  contents: [
    {
      title: "Looking For",
      href: Routes.pages.id.hero,
      description: "What to look for ?",
    },
    {
      title: "Properties",
      href: Routes.pages.id.property,
      description: "Residence in Australia",
    },
    {
      title: "Review",
      href: Routes.pages.id.review,
      description: "Would you like to share your feedback about this project?",
    },
    {
      title: "Popular Locations",
      href: Routes.pages.id.location,
      description:
        "Explore properties in Australia's most sought-after cities and regions.",
    },
    {
      title: "FQAs",
      href: Routes.pages.id.fqa,
      description:
        "Find quick answers to common questions about our properties, services, and booking process.",
    },
    {
      title: "CTA",
      href: Routes.pages.id.footer,
      description: "Not Thing",
    },
  ],
};

const navProperty = {
  trigger: "Property",
  contents: [
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
  ],
};

const navLocation = {
  trigger: "Location",
  contents: [
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Introduction",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
  ],
};

const navProfile = { title: "Profile", href: Routes.pages.profile };
const navDashboard = { title: "Dashboard", href: Routes.dashboardBase };
const navAuth = { title: "Login", href: Routes.auth.login };

export const Navbar = () => {
  const session = useSession();
  const isMobile = useIsMobile();

  return (
    <>
      <NavigationMenu viewport={isMobile ? true : false}>
        <NavigationMenuList>
          {!isMobile && (
            <>
              {/* Nav Home */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>{navHome.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 grid-cols-2 md:grid-cols-3 w-[300px] md:w-[500px]">
                    <li className="row-span-2 md:row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="bg-secondary flex h-full w-full flex-col justify-end p-6 rounded-md no-underline outline-hidden select-none focus:shadow-md"
                          href={Routes.pages.home}
                        >
                          <navHome.headerContent.icon className="size-8" />
                          <div className="mt-4 mb-1 text-lg font-medium">
                            {navHome.headerContent.title}
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            {navHome.headerContent.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    {navHome.contents.map((content, i) => (
                      <NavigationMenuLink asChild key={i}>
                        <Link href={content.href}>
                          <div className="text-sm leading-none font-medium">
                            {content.title}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {content.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Nav Property */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {navProperty.trigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 grid-cols-2 md:grid-cols-3 w-[500px]">
                    {navProperty.contents.map((content, i) => (
                      <NavigationMenuLink asChild key={i}>
                        <Link href={content.href}>
                          <div className="text-sm leading-none font-medium">
                            {content.title}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {content.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Nav Location */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {navLocation.trigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <li>
                      {navLocation.contents.map((content, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <Link href={content.href}>
                            <div className="font-medium">{content.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </>
          )}

          {/* Nav Profile */}
          {session.data?.user ? (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={navProfile.href}
                    className="font-medium border border-secondary md:border-none"
                  >
                    {navProfile.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Nav Dashboard */}
              {session.data?.user.role === "ADMIN" && (
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href={navDashboard.href}
                      className="font-medium border border-secondary md:border-none"
                    >
                      {navDashboard.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </>
          ) : (
            <>
              {/* Nav Login */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={navAuth.href}
                    className="font-medium border border-secondary md:border-none"
                  >
                    {navAuth.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
