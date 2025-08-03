"use client";

import { useFormContext } from "react-hook-form";
import { Loader2, SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ReviewFormSubmit = () => {
  const { formState } = useFormContext();
  return (
    <Button
      type="submit"
      className="mt-2 cursor-pointer whitespace-pre-wrap"
      disabled={!formState.isDirty || formState.isSubmitting}
    >
      {formState.isSubmitting ? (
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
  );
};
