import React, { useEffect } from "react";
import img from "../assets/Jeppiaar University-1-1.png";
import bgVid from "../assets/eventBg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../components/Navbar";

const NonTechEvents = () => {
  const techEvents = [
    { name: "Ad-Zap", img: img },
    { name: "Echo-Echo", img: img },
    { name: "Tune Teaser", img: img },
    { name: "Treasure Hunt", img: img },
    { name: "Dare & Ladder", img: img },
    { name: "Meme Creation", img: img },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="h-full w-full flex justify-center items-center relative p-5">
        <video
          src={bgVid}
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />
        <div className="flex flex-col justify-center items-center gap-10">
          <Navbar />
          <div>
            <div>
              <Link to="/">
                <button
                  className="flex justify-center items-center gap-3 bg-gradient-to-tr from-yellow-950 to-yellow-900 hover:bg-gradient-to-t hover:from-yellow-950 hover:to-yellow-900 hover:scale-110 hover:tracking-wide transition-transform text-white p-3 rounded-md uppercase font-semibold"
                  data-aos="flip-left"
                  data-aos-delay="100"
                >
                  <IoMdArrowRoundBack />
                  go back
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="capitalize text-3xl font-bold">tech events</h1>
            </div>
            <div className="grid grid-cols-3 gap-[2rem] max-md:grid-cols-2 max-sm:grid-cols-1 py-5">
              {techEvents.map((event, index) => {
                return (
                  <article
                    key={index}
                    data-aos="zoom-in"
                    className="max-w-80 border-2 border-t-0 rounded-md flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    <img
                      src={event.img}
                      alt={event.name}
                      className="w-full rounded-md"
                    />
                    <h1 className="p-5 text-center font-medium text-xl tracking-wide">
                      {event.name}
                    </h1>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonTechEvents;
