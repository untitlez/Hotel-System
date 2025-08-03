"use client";

import { useFormContext } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ReviewFormTextareaProps {
  item: {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    required?: boolean;
  };
}

export const ReviewFormTextarea = ({ item }: ReviewFormTextareaProps) => {
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
            <Textarea {...field} placeholder={item.placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
