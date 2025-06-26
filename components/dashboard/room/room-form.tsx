"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2Icon, X } from "lucide-react";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { RoomFormSchema, RoomFormType } from "@/validators/room.validator";

import { toast } from "sonner";
import { ModalButton } from "@/components/modal-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
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

const inputItems = [
  {
    name: "roomNumber",
    label: "Room Number",
    type: "text",
    placeholder: "เช่น A101",
    required: true,
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "เช่น เชียงใหม่, ประเทศไทย",
    required: true,
  },
  {
    name: "type",
    label: "Room Type",
    type: "select",
    placeholder: "เลือกประเภทห้อง",
    options: [
      { value: "Single Room", label: "Single Room" },
      { value: "Twin Room", label: "Twin Room" },
      { value: "Deluxe Room", label: "Deluxe Room" },
      { value: "Suite", label: "Suite" },
    ],
    required: false,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "รายละเอียดเพิ่มเติม",
    required: false,
  },
  {
    name: "pricePerNight",
    label: "Price",
    type: "number",
    placeholder: "เช่น 1000",
    required: true,
  },
];

interface DashboardRoomFormProps {
  data?: RoomFormType;
}

export const DashboardRoomForm = ({ data }: DashboardRoomFormProps) => {
  const form = useForm<RoomFormType>({
    resolver: zodResolver(RoomFormSchema),
    defaultValues: {
      roomNumber: data?.roomNumber ?? "",
      location: data?.location ?? "",
      type: data?.type ?? "",
      description: data?.description ?? "",
      pricePerNight: data?.pricePerNight ?? undefined,
    },
    mode: "onBlur",
  });

  const { handleSubmit, reset, formState, control } = form;
  const router = useRouter();
  const paramsId = useParams().id;

  const onSubmit = async (newData: RoomFormType) => {
    if (data) {
      try {
        await axios.put(Config.API_URL + Endpoints.rooms + paramsId, newData);
        toast.success("Changes saved successfully.");
        console.log("Form Data", newData);
        router.push(Routes.dashboard.room);
      } catch (error: unknown) {
        console.error("Error", error);
        toast.error("Failed to Edit Room Info!");
      }
    } else {
      try {
        await axios.post(Config.API_URL + Endpoints.rooms, newData);
        toast.success("Room created successfully!");
        console.log("Form Data", newData);
        reset();
        router.push(Routes.dashboard.room);
      } catch (error: unknown) {
        console.error("Error", error);
        toast.error("Failed to Create Room!");
      }
    }
  };

  const onDelete = async () => {
    if (!paramsId) return;
    try {
      await axios.delete(Config.API_URL + Endpoints.rooms + paramsId);
      toast.success("Item has been deleted.");
      router.push(Routes.dashboard.room);
    } catch (error: unknown) {
      console.error("Error", error);
      toast.error("Failed to Delete!");
    }
  };
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {data ? (
            <div className="text-start">Room Info: {data?.roomNumber}</div>
          ) : (
            "Create Room"
          )}
        </CardTitle>
        <CardDescription>
          {data ? (
            <>
              <div className="bg-muted/50 aspect-video rounded-xl" />
            </>
          ) : (
            "Please fill out the form to create a new room."
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {inputItems.map((item) => (
              <FormField
                key={item.name}
                control={control}
                name={item.name as keyof RoomFormType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {item.label}
                      {item.required && <span className="text-primary">*</span>}
                    </FormLabel>
                    <FormControl>
                      {item.type === "select" ? (
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
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          {...field}
                          type={item.type}
                          placeholder={item.placeholder}
                          value={field.value}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="flex justify-between gap-2">
              <Button
                asChild
                type="button"
                variant={"outline"}
                className="cursor-pointer"
              >
                <Link href={Routes.dashboard.room}>
                  {formState.isDirty ? (
                    <ChevronLeft />
                  ) : (
                    <>
                      <ChevronLeft />
                      Back
                    </>
                  )}
                </Link>
              </Button>

              {formState.isDirty && (
                <Button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="flex-1 cursor-pointer"
                >
                  {formState.isSubmitting ? (
                    <>
                      <Loader2Icon className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              )}

              {data && (
                <ModalButton
                  type="button"
                  label="Delete"
                  variant="destructive"
                  title="Confirm Delete"
                  description="This will permanently remove the room from your list. Are you sure?"
                  cancel="No, keep it"
                  confirm="Yes, remove it"
                  onClick={onDelete}
                />
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
