"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { ChevronDown, ChevronLeft, ChevronUp, Loader2Icon } from "lucide-react";

import { Routes } from "@/lib/routes";

import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import { UpdateRoomType } from "@/validators/room.validator";

interface RoomFormSubmitProps {
  data?: UpdateRoomType;
  isShowForm: boolean;
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
}

export const RoomFormSubmit = ({
  data,
  isShowForm,
  setIsShowForm,
  onDelete,
}: RoomFormSubmitProps) => {
  const { formState } = useFormContext();

  return (
    <div className="flex justify-between gap-2">
      {/* More & Back */}
      {formState.isDirty ? (
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer"
          onClick={() => setIsShowForm(!isShowForm)}
        >
          {isShowForm ? <ChevronUp /> : <ChevronDown />}
          More
        </Button>
      ) : (
        <Button
          asChild
          type="button"
          variant={"outline"}
          className="cursor-pointer"
        >
          <Link href={Routes.dashboard.room}>
            <ChevronLeft />
            Back
          </Link>
        </Button>
      )}

      {/* More & Submit */}
      {formState.isDirty ? (
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
      ) : (
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer flex-1"
          onClick={() => setIsShowForm(!isShowForm)}
        >
          {isShowForm ? <ChevronUp /> : <ChevronDown />}
          More
        </Button>
      )}

      {/* Delete */}
      {data && (
        <DeleteButton
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
  );
};
