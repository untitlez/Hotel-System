"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export const SearchBox = () => {
  const [search, setSearch] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [price, setPrice] = useState<number[]>([]);
  const [location, setLocation] = useState<string>("");

  const inputItems = {
    search: {
      label: "Looking For",
      placeholder: "What to look for ?",
      value: search,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value),
    },
    type: {
      label: "Type",
      placeholder: "Property Type",
      options: [
        { value: "residence", label: "Residence" },
        { value: "apartment", label: "Apartment" },
        { value: "villa", label: "Villa" },
        { value: "house", label: "House" },
      ],
      value: type,
      onChange: setType,
    },
    price: {
      label: "Price",
      placeholder: "Price",
      priceBar: {
        defaultValue: [1000, 500000],
        min: 1000,
        max: 1000000,
        step: 1000,
      },
      value: price,
      onChange: (value: number[]) => setPrice(value),
    },
    location: {
      label: "Location",
      placeholder: "Australia",
      value: location,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocation(e.target.value),
    },
  };

  return (
    <div className="bg-background text-foreground dark:bg-secondary dark:text-secondary-foreground rounded-xl shadow-lg p-8 m-8 z-10">
      <div className="grid grid-cols-5 gap-6 items-end">
        <div className="hidden lg:block space-y-2">
          <Label>{inputItems.search.label}</Label>
          <Input
            placeholder={inputItems.search.placeholder}
            value={inputItems.search.value}
            onChange={inputItems.search.onChange}
          />
        </div>

        <div className="hidden lg:block space-y-2">
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
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="hidden sm:block col-span-2 lg:col-span-1 space-y-2">
          <Label>{inputItems.price.label}</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={inputItems.price.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <div className="p-4">
                <Slider
                  defaultValue={inputItems.price.priceBar.defaultValue}
                  min={inputItems.price.priceBar.min}
                  max={inputItems.price.priceBar.max}
                  step={inputItems.price.priceBar.step}
                  onValueChange={inputItems.price.onChange}
                />
                <div className="flex justify-between text-sm mt-4">
                  <span>${inputItems.price.priceBar.min}</span>
                  <span>${inputItems.price.priceBar.max}</span>
                </div>
              </div>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-4 sm:col-span-2 lg:col-span-1 space-y-2">
          <Label>{inputItems.location.label}</Label>
          <Input
            placeholder={inputItems.location.placeholder}
            value={inputItems.location.value}
            onChange={inputItems.location.onChange}
          />
        </div>

        <Button className="w-full">
          <Search />
          <span className="hidden md:block">Search</span>
        </Button>
      </div>
    </div>
  );
};
