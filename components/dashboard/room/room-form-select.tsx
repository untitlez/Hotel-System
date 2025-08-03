"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RoomFormSelectProps {
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

export const RoomFormSelect = ({ item }: RoomFormSelectProps) => {
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
            <Select
              defaultValue={field.value?.toString()}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={item.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {item.options?.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
