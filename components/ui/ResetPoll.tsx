import { resetPoll } from "@/actions/ResetPoll";
import { Button } from "./button";
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
  const { mutate: server_resetPoll } = useMutation({
    mutationFn: resetPoll,
  });
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Reset</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently Reset your
              Poll and remove your Poll Voting Data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                server_resetPoll(pollId);
                toast({
                  title: "Poll has been reset!",
                });
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ResetPoll;
