"use client";

import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";

const page = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(userId);
  return (
    <div>
      <div>{/* <Navbar /> */}</div>
      <div className='flex'>
        <Button
          onClick={() => {
            axios.post("http://localhost:3000/api/poll/create-poll");
            alert("Done");
          }}
        >
          Create Poll
        </Button>
        <Button
          onClick={() => {
            const reqbody = {};
            axios.delete("http://localhost:3000/api/poll/delete-poll");
            alert("Done");
          }}
        >
          Delete Poll
        </Button>
        <div>
          <UserButton />
        </div>
      </div>
      Hello
    </div>
  );
};

export default page;
