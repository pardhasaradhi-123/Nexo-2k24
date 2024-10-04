import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import bgVid from "../assets/bgVid.mp4";
import desktop_hero_bg from "../assets/desktop_hero_bg.mp4";
import About from "./About";
import Events from "./Events";

const Home = () => {
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768); // Set mobileScreen based on initial window size

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth <= 768); // Check if window width is less than or equal to 768px
    };

    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <video
          src={mobileScreen ? bgVid : desktop_hero_bg} // Conditionally render based on mobileScreen state
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        ></video>
        <Hero />
      </div>
      <About />
      <Events />
    </>
  );
};

export default Home;
