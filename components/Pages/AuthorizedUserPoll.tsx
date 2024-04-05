// "use client";
// import React, { useEffect, useState } from "react";
// import PollPage from "./PollPage";
// import { PollwithOptionT } from "@/types/PollwithOptions";
// import usePrivateHasVoted from "@/hooks/usePrivateHasVoted";

// const AuthorizedUserPoll = ({
//   poll,
//   userId,
// }: {
//   poll: PollwithOptionT;
//   userId: string;
// }) => {
//   const [voted, setHasVoted] = useState(false);
//   useEffect(() => {
//     async function getVotedvalue() {
//       const vote = await usePrivateHasVoted({
//         userId: userId,
//         pollId: poll.id,
//       });
//       const hasVoted = vote.hasVoted as boolean;
//       setHasVoted(hasVoted);
//     }
//     getVotedvalue();
//   }, []);

//   return (
//     <div>
//       <PollPage poll={poll} hasVotedParent={voted} />
//     </div>
//   );
// };

// export default AuthorizedUserPoll;
