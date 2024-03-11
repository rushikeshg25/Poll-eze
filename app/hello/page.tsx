import { UserButton } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
      Hello <UserButton />
    </div>
  );
};

export default page;
