"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface RoomFormInputProps {
  item: {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: { value: string }[];
    value?: { id: string }[];
    required?: boolean;
  };
}

export const RoomFormInput = ({ item }: RoomFormInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      key={item.name}
      control={control}
      name={item.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {item.label}
            {item.required ? <span className="text-primary">*</span> : ""}
          </FormLabel>
          <FormControl>
            <Input {...field} type={item.type} placeholder={item.placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
