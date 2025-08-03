"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

import { Config } from "@/lib/config";
import { Routes } from "@/lib/routes";
import { LoginSchema, LoginType } from "@/validators/login.validator";

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

const loginItems = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "m@example.com",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "******",
  },
];

export const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onLogin = async (loginForm: LoginType) => {
    const res = await signIn("credentials", {
      email: loginForm.email,
      password: loginForm.password,
      redirect: false,
      callbackUrl: Routes.dashboard.base,
    });
    if (res?.error) {
      toast.error("Invalid email or password");
      form.setError("email", { message: "" });
      form.setError("password", { message: "" });
      return;
    }
    router.push(Routes.pages.home);
  };

  const onLoginWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const onFillAdmin = () => {
    form.setValue("email", Config.LOGIN_WITH_ADMIN.EMAIL);
    form.setValue("password", Config.LOGIN_WITH_ADMIN.PASSWORD);
  };

  const onFillGuest = () => {
    form.setValue("email", Config.LOGIN_WITH_GUEST.EMAIL);
    form.setValue("password", Config.LOGIN_WITH_GUEST.PASSWORD);
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6 my-4 "
            onSubmit={form.handleSubmit(onLogin)}
          >
            {loginItems.map((item) => (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof LoginType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={item.type}
                        placeholder={item.placeholder}
                        {...field}
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1 cursor-pointer"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2Icon className="animate-spin" />
                    Login...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </Form>
        <div className="grid gap-4">
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="outline"
              type="button"
              className=" cursor-pointer"
              onClick={onLoginWithGoogle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              type="button"
              className=" cursor-pointer"
              onClick={onFillGuest}
            >
              Guest
            </Button>
            <Button
              variant="outline"
              type="button"
              className=" cursor-pointer"
              onClick={onFillAdmin}
            >
              Admin
            </Button>
          </div>
          <div className="text-center text-sm space-x-2">
            <span>Don&apos;t have an account?</span>
            <Link
              href={Routes.auth.signUp}
              className="underline underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
