"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, SendHorizontal } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const fieldItems = [
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
    name: "feedback",
    label: "Your Feedback",
    placeholder: "What do you think about this property booking website?",
    type: "textarea",
  },
];

const FormSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  note: z.string(),
});
export type FormType = z.infer<typeof FormSchema>;

export const FormReview = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      note: "",
    },
  });

  function onSubmit(formData: FormType) {
    toast.success("You submitted the following values");
    console.log("Form Data", formData);
  }
  return (
    <div className="p-16 space-y-10">
      <h2 className="text-2xl font-bold">
        Would you like to share your feedback about this project?
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {fieldItems.map((item) =>
            item.type === "textarea" ? (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof FormType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl className="bg-background">
                      <Textarea placeholder={item.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof FormType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl className="bg-background">
                      <Input placeholder={item.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          )}
          <Button
            type="submit"
            className="mt-2 cursor-pointer"
            disabled={!form.formState.isDirty || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Sending feedback...
              </>
            ) : (
              <>
                <SendHorizontal />
                Submit Feedback
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
