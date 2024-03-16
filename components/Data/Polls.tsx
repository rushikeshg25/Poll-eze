"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/lib/projects";
import type { Poll } from "@prisma/client";
type pollsT = { polls: Poll[] };

const Polls = ({ polls }: pollsT) => {
  console.log(polls);
  return (
    <div>
      {" "}
      <div className='max-w-5xl mx-auto px-8'>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Polls;
