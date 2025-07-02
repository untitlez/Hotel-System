"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps
  extends React.ComponentProps<typeof AlertDialogAction> {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  label?: string;
  title?: string;
  description?: string;
  cancel?: string;
  confirm?: string;
}

export const DeleteButton = ({
  variant = "destructive",
  label,
  title = "Title",
  description = "Description",
  cancel = "Cancel",
  confirm = "Confirm",
  ...props
}: DeleteButtonProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer">
        <Button variant={variant}>{label ? label : <Trash2 />}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            {cancel}
          </AlertDialogCancel>
          <AlertDialogAction {...props} className="cursor-pointer">
            {confirm}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
