"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2Icon, X } from "lucide-react";
import axios from "axios";

import { RoomFormSchema, RoomFormType } from "@/validators/roomSchema";
import { inputItems } from "@/lib/constant/create-room/inputItems";
import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";

import { toast } from "sonner";
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
import { ModalButton } from "@/components/modal-button";

interface RoomsOfficeFormProps {
  data?: RoomFormType;
}

export default function RoomsOfficeForm({ data }: RoomsOfficeFormProps) {
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
  console.log("paramsId", paramsId);
  const onSubmit = async (newData: RoomFormType) => {
    if (data) {
      try {
        await axios.put(Config.API_URL + Endpoints.rooms + paramsId, newData);
        toast.success("Edit Room Info Success!");
        console.log("Form Data", newData);
        router.push("/dashboard/rooms-office");
      } catch (error: unknown) {
        console.error("Error", error);
        toast.error("Failed to Edit Room Info!");
      }
    } else {
      try {
        await axios.post(Config.API_URL + Endpoints.rooms, newData);
        toast.success("Create Room Success!");
        console.log("Form Data", newData);
        reset();
        router.push("/dashboard/rooms-office");
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
      toast.success("Deleted Success!");
      router.push("/dashboard/rooms-office");
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
                <Link href="/dashboard/rooms-office">
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
}
