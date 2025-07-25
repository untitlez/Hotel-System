"use client";

import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UpdateRoomType } from "@/validators/room.validator";

interface RoomFormFileProps {
  data?: UpdateRoomType;
  item: {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: { value: string }[];
    value?: { id: string }[];
  };
}

export const RoomFormFile = ({ item, data }: RoomFormFileProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      key={item.name}
      control={control}
      name={item.name}
      render={({ field }) => (
        <FormItem>
          <div className="relative aspect-video border rounded-md overflow-hidden shadow-lg">
            {data && (
              <Image
                src={data.image ?? ""}
                alt={data.name ?? "Room image"}
                className="object-cover rounded-lg"
                sizes="50vw"
                fill
              />
            )}
          </div>
          <FormControl>
            <Input
              className="cursor-pointer"
              type={item.type}
              onChange={field.onChange}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
