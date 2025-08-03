"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu, TentTree } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Routes } from "@/lib/routes";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      href: Routes.navbar.id.hero,
      description: "What to look for ?",
    },
    {
      title: "Properties",
      href: Routes.navbar.id.property,
      description: "Residence in Australia",
    },
    {
      title: "Review",
      href: Routes.navbar.id.review,
      description: "Would you like to share your feedback about this project?",
    },
    {
      title: "Popular Locations",
      href: Routes.navbar.id.location,
      description:
        "Explore properties in Australia's most sought-after cities and regions.",
    },
    {
      title: "FQAs",
      href: Routes.navbar.id.fqa,
      description:
        "Find quick answers to common questions about our properties, services, and booking process.",
    },
    {
      title: "Explore",
      href: Routes.navbar.id.cta,
      description: "Find your perfect escape with Us",
    },
  ],
};

const navProperty = {
  trigger: "Property",
  contents: [
    {
      title: "Villa",
      href: Routes.navbar.property.villa,
      description:
        "Discover luxurious villas with private pools and stunning views.",
    },
    {
      title: "Hotel",
      href: Routes.navbar.property.hotel,
      description:
        "Find comfortable hotels with top-rated amenities and locations.",
    },
    {
      title: "Resort",
      href: Routes.navbar.property.resort,
      description:
        "Explore full-service resorts perfect for relaxation and holidays.",
    },
  ],
};

const navLocation = {
  trigger: "Location",
  contents: [
    {
      title: "Sydney",
      href: Routes.navbar.location.sydney,
      description:
        "Browse stays in Sydney, from beachside apartments to city hotels.",
    },
    {
      title: "Melbourne",
      href: Routes.navbar.location.melbourne,
      description:
        "Stay in Melbourne's vibrant neighborhoods and cultural hotspots.",
    },
    {
      title: "Brisbane",
      href: Routes.navbar.location.brisbane,
      description:
        "Discover warm-weather getaways and modern stays in Brisbane.",
    },
    {
      title: "Perth",
      href: Routes.navbar.location.perth,
      description:
        "Explore accommodations in Perth's peaceful and scenic suburbs.",
    },
    {
      title: "Adelaide",
      href: Routes.navbar.location.adelaide,
      description:
        "Find cozy places to stay near Adelaide's wine and arts scene.",
    },
    {
      title: "GoldCoast",
      href: Routes.navbar.location.goldCoast,
      description:
        "Book beachside escapes and family-friendly resorts on the Gold Coast.",
    },
    {
      title: "Canberra",
      href: Routes.navbar.location.canberra,
      description:
        "Stay near Canberra's national museums and quiet neighborhoods.",
    },
    {
      title: "Hobart",
      href: Routes.navbar.location.hobart,
      description: "Choose from charming lodges to boutique hotels in Hobart.",
    },
  ],
};

const navProfile = { title: "Profile", href: Routes.pages.profile };
const navDashboard = {
  title: "Dashboard",
  href: Routes.dashboard.base,
};
const navAuth = { title: "Login", href: Routes.auth.login };

interface NavbarProps {
  isPropertyPage?: boolean;
}

export const Navbar = ({ isPropertyPage }: NavbarProps) => {
  const session = useSession();
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavigationMenu viewport={isMobile ? true : false} className="z-50">
      <NavigationMenuList>
        {/* Mobile */}
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuGroup>
                {/* Nav Home */}
                {isPropertyPage ? (
                  <DropdownMenuItem>
                    <Link href={Routes.pages.home}>{navHome.trigger}</Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {navHome.trigger}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {navHome.contents.map((content, i) => (
                          <DropdownMenuItem asChild key={i}>
                            <Link href={content.href}>{content.title}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                )}

                {/* Nav Property */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {navProperty.trigger}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {navProperty.contents.map((content, i) => (
                        <DropdownMenuItem asChild key={i}>
                          <Link href={content.href}>{content.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                {/* Nav Location */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {navLocation.trigger}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {navLocation.contents.map((content, i) => (
                        <DropdownMenuItem asChild key={i}>
                          <Link href={content.href}>{content.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                {session.data?.user ? (
                  <>
                    {/* Nav Profile */}
                    <DropdownMenuItem>
                      <Link href={navProfile.href}>{navProfile.title}</Link>
                    </DropdownMenuItem>

                    {/* Nav Dashboard */}
                    {session.data?.user.role === "ADMIN" && (
                      <DropdownMenuItem>
                        <Link href={navDashboard.href}>
                          {navDashboard.title}
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </>
                ) : (
                  <>
                    {/* Nav Login */}
                    <DropdownMenuItem>
                      <Link href={navAuth.href}>{navAuth.title}</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {/* Desktop */}

            {/* Nav Home */}
            {isPropertyPage ? (
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={Routes.pages.home}>{navHome.trigger}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ) : (
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
                      <NavigationMenuLink
                        asChild
                        key={i}
                        className="cursor-pointer"
                      >
                        <div onClick={() => scrollTo(content.href)}>
                          <div className="text-sm leading-none font-medium">
                            {content.title}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {content.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}

            {/* Nav Property */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {navProperty.trigger}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 grid-cols-3 w-[400px]">
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
                <ul className="grid gap-2 grid-cols-3 w-[400px]">
                  {navLocation.contents.map((content, i) => (
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

            {/* Nav Profile */}
            {session.data?.user ? (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={navProfile.href}>{navProfile.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Nav Dashboard */}
                {session.data?.user.role === "ADMIN" && (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href={navDashboard.href}>{navDashboard.title}</Link>
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
                    <Link href={navAuth.href}>{navAuth.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            )}
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
