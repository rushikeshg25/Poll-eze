import Navbar from "@/components/Navbar/Navbar";
import { UserButton } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      Hello
    </div>
  );
};

export default page;
