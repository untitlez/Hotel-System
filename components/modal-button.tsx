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

interface ModalButtonProps
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

export function ModalButton({
  variant = "default",
  label = "Label",
  title = "Title",
  description = "Description",
  cancel = "Cancel",
  confirm = "Confirm",
  ...props
}: ModalButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer">
        <Button variant={variant}>{label}</Button>
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
}
