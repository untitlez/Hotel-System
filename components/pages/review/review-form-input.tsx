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

interface ReviewFormInputProps {
  item: {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    required?: boolean;
  };
}

export const ReviewFormInput = ({ item }: ReviewFormInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={item.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {item.label}
            {item.required ? <span className="text-primary">*</span> : ""}
          </FormLabel>
          <FormControl className="bg-background">
            <Input {...field} placeholder={item.placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
