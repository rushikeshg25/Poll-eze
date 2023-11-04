import { ProgressBarType } from "@/types/UiTypes";
import { Progress } from "@/components/ui/progress";

const ProgressBarSteps = ({ step }: ProgressBarType) => {
  return (
    <>
      <Progress value={33} className="w-[60%]" />
    </>
  );
};

export default ProgressBarSteps;
