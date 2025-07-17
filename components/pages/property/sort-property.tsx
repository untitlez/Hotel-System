"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SortProperty = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);
  const value = searchParams.get("sort") || "";

  const handleSortChange = (value: string) => {
    query.set("sort", value);
    router.push("?" + query);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm ">Sort By:</span>
      <Select value={value} onValueChange={handleSortChange}>
        <SelectTrigger className="border-secondary-foreground/59 cursor-pointer">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="asc">Price: Low to High</SelectItem>
            <SelectItem value="desc">Price: High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
