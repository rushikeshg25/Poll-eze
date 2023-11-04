import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import NewPollMaker from "@/components/ui/NewPollMaker";

const page = () => {
  return (
    <>
      <Navbar newPollPage={true} isloggedIn={true} />
      <div className="flex flex-col h-screen">
        <div className="flex justify-center">Create Your Poll</div>
        <div className="flex items-center justify-center">
          <NewPollMaker />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
