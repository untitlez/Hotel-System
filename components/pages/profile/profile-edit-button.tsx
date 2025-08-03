"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { toast } from "sonner";
import axios from "axios";
import { CalendarIcon, Edit, Image, Loader2 } from "lucide-react";

import { Config } from "@/lib/config";
import { Routes } from "@/lib/routes";
import { Endpoints } from "@/lib/endpoints";
import {
  UpdateProfileSchema,
  UpdateProfileType,
} from "@/validators/profile.validator";
import { ResponseUserType } from "@/validators/user.validator";

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
  image: {
    name: "image",
    label: "Profile Image",
    type: "file",
    placeholder: "Change profile Image",
  },
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

interface ProfileEditButtonProps {
  data: ResponseUserType;
}

export const ProfileEditButton = ({ data }: ProfileEditButtonProps) => {
  const [open, setOpen] = useState(false);
  const form = useForm<UpdateProfileType>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      image: data.profile.image ?? undefined,
      fullName: data.profile.fullName ?? "",
      gender: data.profile.gender ?? "",
      birthday: data.profile.birthday
        ? new Date(data.profile.birthday)
        : undefined,
      address: data.profile.address ?? "",
      phone: data.profile.phone ?? "",
    },
    mode: "onBlur",
  });
  const { control, handleSubmit, formState } = form;
  const router = useRouter();
  const id = data.profile.userId;

  const onSubmit = async (newData: UpdateProfileType) => {
    try {
      let imageUrl: string | undefined;

      if (newData.image) {
        const formData = new FormData();
        formData.append("file", newData.image);

        const { data } = await axios.post(
          Config.API_URL + Endpoints.upload,
          formData,
        );
        imageUrl = data.url;
      }

      const payload = { ...newData, image: imageUrl };
      await axios.put(Config.API_URL + Endpoints.profile + id, payload);
      toast.success("Changes saved successfully.");
      setOpen(false);
    } catch (_error: unknown) {
      toast.error("Failed to Edit Room Info!");
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(Config.API_URL + Endpoints.users + id);
      toast.success("Account has been deleted.");
      router.push(Routes.auth.login);
    } catch (_error: unknown) {
      toast.error("Failed to Delete!");
    }
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 px-4 py-4"
          >
            {/* Profile Image */}
            <FormField
              control={control}
              name={inputItems.image.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{inputItems.image.label}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="cursor-pointer"
                        type={inputItems.image.type}
                        placeholder={inputItems.image.placeholder}
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                      <Image
                        aria-label="Image icon"
                        className="absolute right-2.5 top-2.5 size-4 text-muted-foreground"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                            ? format(field.value, "dd MMM yyyy")
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
