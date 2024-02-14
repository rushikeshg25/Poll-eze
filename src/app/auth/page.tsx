"use client";

type providerType = {
  name: string;
  id: string;
};

import { signIn } from "next-auth/react";

export default function SignIn({ providers }: { providers: providerType }) {
  return (
    <>
      <div>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    </>
  );
}
