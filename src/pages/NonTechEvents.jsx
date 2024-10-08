import React, { useEffect } from "react";
import bgVid from "../assets/eventBg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../components/Navbar";
import tune_teasers from "../assets/tune_teaser_1-1.png";
import adzap from "../assets/adzap_1-1.png";
import laugh_factory from "../assets/laugh_factory_1-1.png";
import echoEcho from "../assets/echo-echo_1-1.png";
import balltastic from "../assets/ball-tastic_1-1.png";
import dareAndLadder from "../assets/dare-ladder_1-1.png";
import treaserHunt from "../assets/treasureHunt_1_1.png";

const NonTechEvents = () => {
  const techEvents = [
    { name: "AdZap", img: adzap },
    { name: "Echo-Echo", img: echoEcho },
    { name: "Tune Teasers", img: tune_teasers },
    { name: "Treasure Hunt", img: treaserHunt },
    { name: "Laugh Factory", img: laugh_factory },
    { name: "Dare and Ladder", img: dareAndLadder },
    { name: "Ball'tastic blash", img: balltastic },
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
            <div className="flex justify-center items-center">
              <h1 className="capitalize text-3xl font-bold">Non-Tech events</h1>
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
                    <div className="p-3 flex flex-col justify-around items-center gap-3">
                      <h2 className="capitalize text-lg font-bold">
                        {event.name}
                      </h2>
                      <Link to={`/non-tech-events/${event.name}`}>
                        <button
                          className="flex justify-center items-center gap-3 bg-gradient-to-tr from-yellow-950 to-yellow-900 hover:bg-gradient-to-t hover:from-yellow-950 hover:to-yellow-900 hover:scale-110 hover:tracking-wide transition-transform text-white p-3 rounded-md uppercase font-semibold"
                          data-aos="flip-left"
                          data-aos-delay="100"
                        >
                          view details
                        </button>
                      </Link>
                    </div>
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
