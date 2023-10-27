import ProgressBarSteps from "./ProgressBarSteps";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

enum STEPS {
  TITLEANDOPTIONS = 1,
  OPTIONS = 2,
  FINALIZE = 3,
}

const NewPollMaker = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex justify-center">
        hello
        <Progress value={33} />
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default NewPollMaker;
