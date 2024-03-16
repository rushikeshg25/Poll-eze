import MainNavbar from "@/components/Navbar/MainNavbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='flex flex-col h-screen'>
      <MainNavbar isAuthenticated='' isLanding={false} isAllPollsPage={false} />
      <div className='flex-1 flex justify-center items-center '>
        <SignIn />
      </div>
    </div>
  );
}
