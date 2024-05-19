"use client";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
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
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { DeletePollAction } from "@/actions/DeletePoll";

const DeletePoll = ({ pollId }: { pollId: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: server_DeletePoll } = useMutation({
    mutationFn: DeletePollAction,
    onSuccess: () => {
      toast({
        title: "Poll Deleted",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.Please try again",
        description: "There was a problem with your request.",
      });
    },
  });
  const [open, setOpen] = useState<boolean>(false);
  const deletehandler = async () => {
    await server_DeletePoll({ pollId: pollId });
    router.push("/all-polls");
  };
  return (
    <>
      <Button
        variant={"outline"}
        className='bg-white text-red-500 dark:bg-black '
        onClick={(event) => {
          event?.stopPropagation();
          setOpen(true);
        }}
      >
        <Trash2 />
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              Poll
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={deletehandler}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeletePoll;
