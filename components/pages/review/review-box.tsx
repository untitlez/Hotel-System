"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { User2 } from "lucide-react";
import { toast } from "sonner";

import { Config } from "@/lib/config";
import { Endpoints } from "@/lib/endpoints";
import { ResponseReviewType } from "@/validators/review.validator";

import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

interface ReviewBoxProps {
  review: ResponseReviewType[];
}

export const ReviewBox = ({ review }: ReviewBoxProps) => {
  const [reviewData, setReviewData] = useState<ResponseReviewType[]>(review);
  const session = useSession();

  const onDelete = async (id: string) => {
    try {
      await axios.delete(Config.API_URL + Endpoints.review + id);
      setReviewData((prev) => prev.filter((item) => item.id !== id));
      toast.success("Item has been deleted.");
    } catch {
      toast.error("Failed to Delete!");
    }
  };


  return (
    <>
      {reviewData.map((item, i) => (
        <Card key={i} className="bg-secondary">
          <CardHeader>
            <Button
              variant="ghost"
              size="lg"
              className="p-0 pointer-events-none"
            >
              <Avatar className="size-9 border dark:border-muted-foreground/75 rounded-lg">
                {session.data?.user.image ? (
                  <AvatarImage
                    src={session.data?.user.image ?? ""}
                    alt="Profile Image"
                  />
                ) : (
                  <AvatarFallback className="rounded-lg bg-primary text-secondary dark:text-secondary-foreground">
                    <User2 className="size-5" />
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate font-medium">
                  {item.name ?? "Anonymous"}
                </span>
                <span className="text-muted-foreground truncate">
                  {item.email ?? "Anonymous"}
                </span>
              </div>
            </Button>
            <CardAction>
              {session.data?.user.role === "ADMIN" && (
                <DeleteButton
                  label="X"
                  size="sm"
                  title="Delete Feedback?"
                  description="This action cannot be undone. The feedback will be permanently removed."
                  onClick={() => onDelete(item.id)}
                />
              )}
            </CardAction>
          </CardHeader>
          <CardContent className="grid place-items-center">
            <p>&quot; {item.review} &quot;</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
