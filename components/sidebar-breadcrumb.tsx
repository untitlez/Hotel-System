"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const SidebarBreadcrumb = () => {
  const pathName = usePathname();
  const segments = pathName.split("/");
  const checkId = (value: string) => /^c[a-z0-9]{24,}$/.test(value);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => (
          <span key={index} className="flex items-center gap-3 capitalize">
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                // Current Page
                checkId(segment) ? (
                  <BreadcrumbPage>
                    {segments[index - 1] + " info"}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                )
              ) : (
                // Previous Page
                <BreadcrumbLink
                  href={`/${segments.slice(1, index + 1).join("/")}`}
                >
                  {index === 0 ? "Home" : segment}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index !== segments.length - 1 && <BreadcrumbSeparator />}
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
