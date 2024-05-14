import { auth } from "@clerk/nextjs";
import LandingPagePoll from "./LandingPagePoll";
import HeroDesc from "./HeroDesc";

const Hero = () => {
  const { userId } = auth();

  return (
    <section className='relative bg-white py-32 lg:py-36 dark:bg-black'>
      <div className='mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5'>
        <HeroDesc userId={userId} />
        <div className='relative  flex flex-1   '>
          <LandingPagePoll />
        </div>
      </div>
    </section>
  );
};

export default Hero;
