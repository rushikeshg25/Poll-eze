import React from "react";
import LandingNavbar from "@/components/Navbar/LandingNavbar";
import Hero from "@/components/Pages/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div>
        <LandingNavbar />
      </div>
      <div className='flex-1 items-center justify-center '>
        <Hero />
      </div>
      <Footer className='fixed bottom-0 w-full' />
    </div>
  );
};

export default Home;
