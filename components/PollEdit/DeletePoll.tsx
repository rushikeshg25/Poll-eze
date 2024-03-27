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

declare module "axios" {
  export interface AxiosRequestConfig {
    pollId: string;
  }
}

const DeletePoll = ({ pollId }: { pollId: string }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState<boolean>(false);
  const deletehandler = async () => {
    try {
      await axios.delete("http://localhost:3000/api/poll/delete-poll", {
        pollId: pollId,
      });
      toast({
        title: "Poll Deleted",
      });
    } catch (error) {
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
        onClick={() => {
          setOpen(true);
        }}
      >
        <Trash2 />
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
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
