"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogginState = () => {
  const session = useSession();

  return (
    <div>
      <div>
        {session.status === "authenticated" ? (
          <div>Logged In</div>
        ) : (
          <div>Not Logged In</div>
        )}
      </div>
      <Button onClick={() => signOut()}>Signout</Button>
    </div>
  );
};

export default LogginState;
