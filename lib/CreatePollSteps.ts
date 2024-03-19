import PollData from "@/components/CreatePollSteps/PollData";
import PollOptions from "@/components/CreatePollSteps/PollOptions";
import PollDuration from "@/components/CreatePollSteps/PollDuration";
import Finalize from "@/components/CreatePollSteps/Finalize";
import Finish from "@/components/CreatePollSteps/Finish";

export const STEPS = [
  {
    name: "Poll Data",
    step: 0,
    progress: 0,
    component: <PollData />,
  },
  {
    name: "Poll Options",
    step: 1,
    progress: 25,
    component: <PollOptions />,
  },
  {
    name: "Poll Duration",
    step: 2,
    progress: 50,
    component: <PollDuration />,
  },
  {
    name: "Finalize",
    step: 3,
    progress: 75,
    component: <Finalize />,
  },
  {
    name: "Finish",
    step: 4,
    progress: 100,
    component: <Finish />,
  },
];
