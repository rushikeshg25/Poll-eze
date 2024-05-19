import React from "react";
import LandingNavbar from "@/components/Navbar/LandingNavbar";
import Hero from "@/components/ui/Hero";
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
      <Footer />
    </div>
  );
};

export default Home;
