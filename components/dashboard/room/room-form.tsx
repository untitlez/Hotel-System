"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, ChevronLeft, ChevronUp, Loader2Icon } from "lucide-react";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { UpdateRoomSchema, UpdateRoomType } from "@/validators/room.validator";

import { toast } from "sonner";
import { DeleteButton } from "@/components/delete-button";
import { Checkbox } from "@/components/ui/checkbox";
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
    name: "image",
    label: "Images",
    type: "file",
    placeholder: "เช่น Img.jpg",
  },
  {
    name: "name",
    label: "Room Name",
    type: "text",
    placeholder: "เช่น A101",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "เช่น เชียงใหม่, ประเทศไทย",
  },
  {
    name: "type",
    label: "Room Type",
    type: "select",
    placeholder: "เลือกประเภทห้อง",
    options: [{ value: "Hotel" }, { value: "Resort" }, { value: "Villa" }],
  },
  {
    name: "pricePerNight",
    label: "Price",
    type: "number",
    placeholder: "เช่น 1000",
  },
  {
    name: "maxGuests",
    label: "Max Guests",
    type: "number",
    placeholder: "รายละเอียดเพิ่มเติม",
  },
  {
    name: "roomSize",
    label: "Room Size",
    type: "number",
    placeholder: "รายละเอียดเพิ่มเติม",
  },
  {
    name: "beds",
    label: "Beds",
    type: "select",
    options: [
      { value: "1 King Bed" },
      { value: "1 Queen Bed" },
      { value: "2 Twin Beds" },
      { value: "1 Bunk Bed" },
    ],

    placeholder: "รายละเอียดเพิ่มเติม",
  },
  {
    name: "amenities",
    label: "Amenities",
    type: "checkbox",
    value: [
      { id: "Solar Panels" },
      { id: "Air Conditioning" },
      { id: "Security System" },
      { id: "Pool" },
      { id: "Smart Home" },
      { id: "Garden" },
      { id: "Wi-Fi" },
      { id: "Balcony" },
      { id: "Garage" },
    ],
  },
];

interface DashboardRoomFormProps {
  data?: UpdateRoomType;
}

export const DashboardRoomForm = ({ data }: DashboardRoomFormProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const form = useForm<UpdateRoomType>({
    resolver: zodResolver(UpdateRoomSchema),
    defaultValues: {
      name: data?.name ?? "",
      location: data?.location ?? "",
      type: data?.type ?? "",
      pricePerNight: data?.pricePerNight ?? undefined,
      maxGuests: data?.maxGuests ?? undefined,
      roomSize: data?.roomSize ?? undefined,
      beds: data?.beds ?? "",
      amenities: data?.amenities ?? [],
      image: data?.image ?? "",
    },
    mode: "onBlur",
  });

  const { handleSubmit, reset, formState, control } = form;
  const router = useRouter();
  const paramsId = useParams().id;

  const onSubmit = async (newData: UpdateRoomType) => {
    if (data) {
      try {
        await axios.put(
          Config.API_URL + Endpoints.room.baseRoom + paramsId,
          newData
        );
        toast.success("Changes saved successfully.");
        console.log("Form Data", newData);
        router.push(Routes.dashboard.room);
      } catch (error: unknown) {
        console.error("Error", error);
        toast.error("Failed to Edit Room Info!");
      }
    } else {
      try {
        await axios.post(Config.API_URL + Endpoints.room.baseRoom, newData);
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
      await axios.delete(Config.API_URL + Endpoints.room.baseRoom + paramsId);
      toast.success("Item has been deleted.");
      router.push(Routes.dashboard.room);
    } catch (error: unknown) {
      console.error("Error", error);
      toast.error("Failed to Delete!");
    }
  };
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-lg font-bold">
          {data ? (
            <div className="text-start">Room Info: {data?.name}</div>
          ) : (
            "Create Room"
          )}
        </CardTitle>
        <CardDescription>
          {!data && "Please fill out the form to create a new room."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {inputItems.map((item) => (
              <FormField
                key={item.name}
                control={control}
                name={item.name as keyof UpdateRoomType}
                render={({ field }) => (
                  <>
                    {item.name === "image" && (
                      <FormItem>
                        <FormControl>
                          <div>
                            <div className="relative aspect-video border rounded-lg shadow-lg">
                              {data && (
                                <Image
                                  src={String(field.value)}
                                  alt={item.name}
                                  className="object-cover rounded-lg"
                                  sizes="50vw"
                                  fill
                                />
                              )}
                            </div>
                            <Input
                              className="cursor-pointer mt-1.5 z-10"
                              type={item.type}
                              onChange={field.onChange}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}

                    {item.type === "select" && (
                      <FormItem>
                        <FormLabel>
                          {item.label}
                          <span className="text-primary">*</span>
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

                    {item.type === "text" && (
                      <FormItem>
                        <FormLabel>
                          {item.label}
                          <span className="text-primary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={item.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}

                    {item.name === "pricePerNight" && (
                      <FormItem>
                        <FormLabel>
                          {item.label}
                          <span className="text-primary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={item.placeholder}
                            type={item.type}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}

                    {isShowForm && (
                      <div>
                        {item.name !== "pricePerNight" &&
                          item.type === "number" && (
                            <FormItem>
                              <FormLabel>{item.label}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={item.placeholder}
                                  type={item.type}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}

                        {item.type === "checkbox" && (
                          <div className="grid grid-cols-3 gap-4 border p-4 rounded-lg bg-secondary">
                            {item.value?.map((val, i) => {
                              const selected = Array.isArray(field.value)
                                ? field.value
                                : [];
                              return (
                                <FormItem
                                  key={i}
                                  className="flex items-center gap-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      className="cursor-pointer"
                                      id={val.id}
                                      checked={selected.includes(val.id)}
                                      onCheckedChange={(checked: boolean) => {
                                        const updated = checked
                                          ? [...selected, val.id]
                                          : selected.filter(
                                              (v) => v !== val.id
                                            );

                                        field.onChange(updated);
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel
                                    htmlFor={val.id}
                                    className="cursor-pointer"
                                  >
                                    {val.id}
                                  </FormLabel>
                                </FormItem>
                              );
                            })}
                          </div>
                        )}

                        {item.name === "beds" && (
                          <FormItem>
                            <FormLabel>
                              {item.label}
                              <span className="text-primary">*</span>
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
                                    <SelectItem
                                      key={opt.value}
                                      value={opt.value}
                                    >
                                      {opt.value}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      </div>
                    )}
                  </>
                )}
              />
            ))}

            {/* Button Submit */}
            <div className="flex justify-between gap-2">
              {formState.isDirty ? (
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => setIsShowForm(!isShowForm)}
                >
                  {isShowForm ? <ChevronUp /> : <ChevronDown />}
                  More
                </Button>
              ) : (
                <Button
                  asChild
                  type="button"
                  variant={"outline"}
                  className="cursor-pointer"
                >
                  <Link href={Routes.dashboard.room}>
                    <ChevronLeft />
                    Back
                  </Link>
                </Button>
              )}

              {formState.isDirty ? (
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
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer flex-1"
                  onClick={() => setIsShowForm(!isShowForm)}
                >
                  {isShowForm ? <ChevronUp /> : <ChevronDown />}
                  More
                </Button>
              )}

              {data && (
                <DeleteButton
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
