"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { SignUpSchema, SignUpType } from "@/validators/sign-up.validator";
import { signUpItems } from "@/lib/fields/sign-up";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export function SignUpForm() {
  const router = useRouter();
  const form = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (formData: SignUpType) => {
    try {
      await axios.post(Config.API_URL + Endpoints.authSignUp, formData);
      toast.success("Account created successfully!");
      console.log("FormData", formData);
      router.push("/login");
    } catch (error: unknown) {
      console.log("Error", error);
      toast.error("Failed to create account.");
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 my-4 "
          >
            {signUpItems.map((item) => (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof SignUpType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={item.type}
                        placeholder={item.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="w-full mt-4 cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2Icon className="animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center text-sm">
          I have an account{" "}
          <Link href="/login/" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
