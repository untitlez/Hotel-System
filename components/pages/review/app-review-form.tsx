"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import {
  CreateReviewSchema,
  CreateReviewType,
} from "@/validators/review.validator";

import { Form } from "@/components/ui/form";
import { ReviewFormInput } from "./review-form-input";
import { ReviewFormTextarea } from "./review-form-textarea";
import { ReviewFormSubmit } from "./review-form-submit";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const inputItems = [
  {
    name: "name",
    label: "Your Name",
    placeholder: "e.g. John Doe",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "e.g. john@example.com",
    type: "text",
  },
  {
    name: "review",
    label: "Your Feedback",
    placeholder: "What do you think about this property booking website?",
    type: "textarea",
    required: true,
  },
];

export const AppReviewForm = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<CreateReviewType>({
    resolver: zodResolver(CreateReviewSchema),
    defaultValues: {
      name: "",
      email: "",
      review: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (newData: CreateReviewType) => {
    try {
      await axios.post(Config.API_URL + Endpoints.review, newData);
      setOpen(true);
      form.reset();
    } catch {
      toast.error("Failed to sent feedback!");
    }
  };

  return (
    <>
      <Card className="py-16 sm:p-16 rounded-t-none lg:rounded-l-none lg:rounded-tr-xl bg-secondary">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <h2 className="text-2xl font-bold">
                Would you like to share your feedback about this project?
              </h2>
              {inputItems.map((item, i) => (
                <div key={i}>
                  {item.type === "text" && <ReviewFormInput item={item} />}
                  {item.type === "textarea" && (
                    <ReviewFormTextarea item={item} />
                  )}
                </div>
              ))}
              <ReviewFormSubmit />
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Alert Message */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Thank you for your feedback</AlertDialogTitle>
            <AlertDialogDescription>
              We appreciate your time and input. Your feedback helps us improve.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="cursor-pointer">
              Done
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
