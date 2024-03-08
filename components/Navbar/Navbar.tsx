import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className='h-screen'>
      <UserButton />
    </div>
  );
}
