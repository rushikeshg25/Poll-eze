"use client";

import MainNavbar from "@/components/Navbar/MainNavbar";
import { useAuth } from "@clerk/nextjs";

const page = () => {
  const { userId } = useAuth();
  return (
    <div>
      <MainNavbar isLanding={false} isAuthenticated={`userId`} />
    </div>
  );
};

export default page;
