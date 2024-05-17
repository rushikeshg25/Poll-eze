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
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const DeletePoll = ({ pollId }: { pollId: string }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState<boolean>(false);
  const deletehandler = async () => {
    try {
      console.log("client", {
        pollId: pollId,
      });
      await axios.post("http://localhost:3000/api/poll/delete-poll", {
        pollId: pollId,
      });
      toast({
        title: "Poll Deleted",
      });
      router.push("/all-polls");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.Please try again",
        description: "There was a problem with your request.",
      });
    }
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
