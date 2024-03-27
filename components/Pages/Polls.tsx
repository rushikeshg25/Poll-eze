"use client";

import React, { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PollwithOptionT } from "@/types/PollwithOptions";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  // const [loading, setLoading] = useState();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   <div>
  //     <div className='max-w-5xl mx-auto px-8 grid grid-cols-3'>
  //       <Skeleton key={} />
  //     </div>
  //   </div>;
  // }
  return (
    <div>
      <div className='max-w-5xl mx-auto px-8'>
        <HoverEffect polls={polls} />
      </div>
    </div>
  );
};

export default Polls;

// const Skeleton = ({ className }) => (
//   <div aria-live="polite" aria-busy="true" className={className}>
//     <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
//       ‌
//     </span>
//     <br />
//   </div>
// )

// const SVGSkeleton = ({ className }) => (
//   <svg
//     className={
//       className + " animate-pulse rounded bg-gray-300"
//     }
//   />
// )

// export { Skeleton, SVGSkeleton }
