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
      <div className="flex justify-center">Create your Poll</div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default NewPollMaker;
