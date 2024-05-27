"use client";
import { resetPoll } from "@/actions/ResetPoll";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
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
import { useToast } from "@/components/ui/use-toast";

const ResetPoll = ({ pollId }: { pollId: string }) => {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: resetPoll,
    onSuccess: () => {
      toast({
        title: "Poll has been reset!",
      });
    },
    onError: () => {
      toast({
        title: "Error resetting poll.",
      });
    },
  });

  const handleReset = () => {
    mutation.mutate(pollId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Reset</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently reset your poll
            and remove your poll voting data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleReset}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetPoll;
