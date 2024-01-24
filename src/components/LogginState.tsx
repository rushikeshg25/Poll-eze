"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const LogginState = () => {
  const session = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div>
      <div>
        {session.status === "authenticated" ? (
          <div>Logged In</div>
        ) : (
          <div>Not Logged In</div>
        )}
      </div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default LogginState;
