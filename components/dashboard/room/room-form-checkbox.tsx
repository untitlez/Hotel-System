"use client";

import { useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

interface RoomFormCheckboxProps {
  item: {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: { value: string }[];
    value?: { id: string }[];
  };
}

export const RoomFormCheckbox = ({ item }: RoomFormCheckboxProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      key={item.name}
      control={control}
      name={item.name}
      render={({ field }) => (
        <div className="grid grid-cols-3 gap-4 border p-4 rounded-lg bg-secondary">
          {item.value?.map((val, i) => {
            const selected = Array.isArray(field.value) ? field.value : [];
            return (
              <FormItem key={i} className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    className="cursor-pointer"
                    id={val.id}
                    checked={selected.includes(val.id)}
                    onCheckedChange={(checked: boolean) => {
                      const updated = checked
                        ? [...selected, val.id]
                        : selected.filter((v) => v !== val.id);

                      field.onChange(updated);
                    }}
                  />
                </FormControl>
                <FormLabel htmlFor={val.id} className="cursor-pointer">
                  {val.id}
                </FormLabel>
              </FormItem>
            );
          })}
        </div>
      )}
    />
  );
};
