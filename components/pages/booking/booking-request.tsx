"use client";

import { useFormContext, Controller } from "react-hook-form";
import { BedDouble, BedSingle, Cigarette, CigaretteOff } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const inputItems = {
  requests: [
      {
        name: "roomType",
        label: "Which type of room would you prefer?",
        options: [
          { icon: CigaretteOff, value: "Non-smoking" },
          { icon: Cigarette, value: "Smoking" },
        ],
      },
      {
        name: "bedType",
        label: "Which bed setup would you prefer?",
        options: [
          { icon: BedSingle, value: "I'd like a large bed" },
          { icon: BedDouble, value: "I'd like twin beds" },
        ],
      },
    ],
    note: {
      label: "Let us know in English or Thai",
      placeholder: "Enter any additional requests",
    },
}

export const BookingRequest = () => {
  const { control } = useFormContext();

  return (
    <div className="bg-card p-6 rounded-xl space-y-6">
      <div>
        <p>Special requests</p>
        <p className="text-muted-foreground text-sm">
          Select your preference. Subject to availability.
        </p>
      </div>
      <div className="bg-secondary p-4 rounded-xl border grid sm:grid-cols-2 gap-6">
        {inputItems.requests.map((item, i) => (
          <div key={i} className="space-y-4">
            <Label>{item.label}</Label>
            <Controller
              name={`request.${item.name}`}
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {item.options.map((opt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-muted-foreground hover:text-secondary-foreground"
                    >
                      <RadioGroupItem
                        className="cursor-pointer"
                        value={opt.value}
                        id={opt.value}
                      />
                      <opt.icon className="size-4 ml-2" />
                      <Label className="cursor-pointer" htmlFor={opt.value}>
                        {opt.value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
          </div>
        ))}
      </div>

      <Controller
        name="request.note"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <Label>{inputItems.note.label}</Label>
            <Textarea {...field} placeholder={inputItems.note.placeholder} />
          </div>
        )}
      />
    </div>
  );
};
