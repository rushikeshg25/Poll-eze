import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar newPollPage={false} isloggedIn={true} />
    </>
  );
}
