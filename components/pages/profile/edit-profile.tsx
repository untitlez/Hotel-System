"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Edit, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { Routes } from "@/lib/routes";
import { Endpoints } from "@/lib/endpoints";
import {
  ProfileFormSchema,
  ProfileFormType,
} from "@/validators/profile.validator";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { DeleteButton } from "@/components/delete-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const inputItems = {
  fullName: {
    name: "fullName",
    label: "Full Name",
    placeholder: "e.g. John Doe",
  },
  gender: {
    name: "gender",
    label: "Gender",
    options: {
      male: "Male",
      female: "Female",
    },
    placeholder: "Select gender",
  },
  birthday: {
    name: "birthday",
    label: "Birthdate",
  },
  address: {
    name: "address",
    label: "Address",
    placeholder: "e.g. 123 Main St, Chiang Mai, Thailand",
  },
  phone: {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. 0812345678",
  },
} as const;

interface EditProfileProps {
  data?: ProfileFormType;
  id?: string;
}

export const EditProfile = ({ data, id }: EditProfileProps) => {
  const form = useForm<ProfileFormType>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      fullName: data?.fullName ?? "",
      gender: data?.gender ?? "",
      birthday: data?.birthday ? new Date(data.birthday) : undefined,
      address: data?.address ?? "",
      phone: data?.phone ?? "",
    },
    mode: "onBlur",
  });

  const { control, handleSubmit, formState } = form;
  const router = useRouter();

  const onSubmit = async (newData: ProfileFormType) => {
    try {
      await axios.put(Config.API_URL + Endpoints.profile + id, newData);
      toast.success("Changes saved successfully.");
      console.log("Form Data", newData);
      router.push(Routes.pages.profile);
    } catch (error: unknown) {
      console.error("Error", error);
      toast.error("Failed to Edit Room Info!");
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(Config.API_URL + Endpoints.users + id);
      toast.success("Account has been deleted.");
      router.push(Routes.pages.profile);
    } catch (error: unknown) {
      console.error("Error", error);
      toast.error("Failed to Delete!");
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex justify-start cursor-pointer">
          <Edit />
          <span>Edit Profile</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 px-4 py-4"
          >
            {/* Full Name */}
            <FormField
              control={control}
              name={inputItems.fullName.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{inputItems.fullName.label}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={inputItems.fullName.placeholder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={control}
              name={inputItems.gender.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{inputItems.gender.label}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="flex gap-6"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Male" id="male" />
                        <FormLabel htmlFor="male">
                          {inputItems.gender.options.male}
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Female" id="female" />
                        <FormLabel htmlFor="female">
                          {inputItems.gender.options.female}
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Birthdate */}
            <FormField
              control={control}
              name={inputItems.birthday.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{inputItems.birthday.label}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full justify-between"
                        >
                          {field.value
                            ? field.value.toLocaleDateString()
                            : "Select date"}
                          <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={control}
              name={inputItems.address.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{inputItems.address.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={inputItems.address.placeholder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={control}
              name={inputItems.phone.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{inputItems.phone.label}</FormLabel>
                  <FormControl>
                    <Input
                      inputMode="numeric"
                      maxLength={10}
                      {...field}
                      type={inputItems.phone.type}
                      placeholder={inputItems.phone.placeholder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Footer */}
            <SheetFooter className="px-0 py-6 flex flex-row">
              {formState.isDirty ? (
                <Button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="flex-1 cursor-pointer"
                >
                  {formState.isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              ) : (
                <SheetClose asChild>
                  <Button type="button" variant="outline" className="flex-1">
                    Close
                  </Button>
                </SheetClose>
              )}

              {data && (
                <DeleteButton
                  title="Confirm Delete"
                  description="This will permanently remove the your profile. Are you sure?"
                  cancel="No, keep it"
                  confirm="Yes, remove it"
                  onClick={onDelete}
                />
              )}
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
