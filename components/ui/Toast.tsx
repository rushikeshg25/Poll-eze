import { useToast } from "@/components/ui/use-toast";
type ToastProps = {
  toastTitle: string;
};

const Toast = ({ toastTitle }: ToastProps) => {
  const { toast } = useToast();
  toast({
    title: toastTitle,
  });
  return null;
};

export default Toast;
