"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";

const page = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  return (
    <div>
      <div className='flex'>
        <Button
          onClick={() => {
            try {
              axios.post("http://localhost:3000/api/poll/create-poll");
            } catch (error) {
              console.log(error);
            }
            alert("Done");
          }}
        >
          Create Poll
        </Button>
        <Button
          onClick={() => {
            axios.delete("http://localhost:3000/api/poll/delete-poll");
            alert("Done");
          }}
        >
          Delete Poll
        </Button>
        <Button
          onClick={() => {
            axios.get("http://localhost:3000/api/poll/fetch-poll");
            alert("Done");
          }}
        >
          Fetch Polls
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
