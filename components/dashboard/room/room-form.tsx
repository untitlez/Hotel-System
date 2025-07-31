"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { Routes } from "@/lib/routes";
import { UpdateRoomSchema, UpdateRoomType } from "@/validators/room.validator";

import { RoomFormFile } from "./room-form-file";
import { RoomFormInput } from "./room-form-input";
import { RoomFormSelect } from "./room-form-select";
import { RoomFormCheckbox } from "./room-form-checkbox";
import { RoomFormSubmit } from "./room-form-submit";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  const router = useRouter();
  const paramsId = useParams().id;

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
        form.reset();
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
    <Card className="max-w-screen-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {data ? "Room Info :" : "Create Room"}
        </CardTitle>
        <CardDescription>
          {!data && "Please fill out the form to create a new room."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            {inputItems.map((item) => (
              <div key={item.name}>
                {item.name === "image" && (
                  <RoomFormFile item={item} data={data} />
                )}
                {item.name === "location" && <RoomFormInput item={item} />}
                {item.name === "type" && <RoomFormSelect item={item} />}
                {item.name === "pricePerNight" && <RoomFormInput item={item} />}

                {isShowForm && (
                  <>
                    {item.name == "maxGuests" && <RoomFormInput item={item} />}
                    {item.name === "roomSize" && <RoomFormInput item={item} />}
                    {item.name === "beds" && <RoomFormSelect item={item} />}
                    {item.name === "amenities" && (
                      <RoomFormCheckbox item={item} />
                    )}
                  </>
                )}
              </div>
            ))}
            {/* Button Submit */}
            <RoomFormSubmit
              data={data}
              isShowForm={isShowForm}
              setIsShowForm={setIsShowForm}
              onDelete={onDelete}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
