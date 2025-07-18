"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchBox = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);

  const handleSearch = () => {
    if (search.trim()) {
      setLoading(true);
      query.set("search", search.toString());
      router.push("property?" + query);
    }
  };

  useEffect(() => {
    if (!type) return;
    setLoading(true);
    query.set("search", type.toString().trim());
    router.push("property?" + query);
  }, [type]);

  useEffect(() => {
    if (!location) return;
    setLoading(true);
    query.set("search", location.toString().trim());
    router.push("property?" + query);
  }, [location]);

  const inputItems = {
    search: {
      label: "Looking For",
      placeholder: "What to look for ?",
      value: search,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value),
      onkeyup: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
      },
    },
    type: {
      label: "Type",
      placeholder: "Property Type",
      options: [{ value: "Villa" }, { value: "Hotel" }, { value: "Resort" }],
      value: type,
      onChange: setType,
    },
    location: {
      label: "Location",
      placeholder: "Australia",
      options: [
        { value: "Sydney" },
        { value: "Melbourne" },
        { value: "Brisbane" },
        { value: "Perth" },
        { value: "Adelaide," },
        { value: "Gold Coast," },
        { value: "Canberra" },
        { value: "Hobart" },
      ],
      value: location,
      onChange: setLocation,
    },
  };

  return (
    <div className="bg-background text-foreground dark:bg-secondary dark:text-secondary-foreground rounded-xl shadow-lg p-8 m-8 z-10">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 items-end">
        <div className="col-span-2 sm:col-span-1 space-y-2">
          <Label>{inputItems.search.label}</Label>
          <Input
            placeholder={inputItems.search.placeholder}
            value={inputItems.search.value}
            onChange={inputItems.search.onChange}
            onKeyUp={inputItems.search.onkeyup}
          />
        </div>

        <div className="hidden sm:block space-y-2">
          <Label>{inputItems.type.label}</Label>
          <Select
            value={inputItems.type.value}
            onValueChange={inputItems.type.onChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={inputItems.type.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {inputItems.type.options.map((opt, i) => (
                <SelectItem key={i} value={opt.value}>
                  {opt.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="hidden lg:block space-y-2">
          <Label>{inputItems.location.label}</Label>
          <Select
            value={inputItems.location.value}
            onValueChange={inputItems.location.onChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={inputItems.location.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {inputItems.location.options.map((opt, i) => (
                <SelectItem key={i} value={opt.value}>
                  {opt.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full cursor-pointer"
          disabled={loading}
          onClick={handleSearch}
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <Search />
              <span className="hidden sm:block">Search</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
