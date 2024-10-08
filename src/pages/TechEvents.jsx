import React, { useEffect } from "react";
import bgVid from "../assets/eventBg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../components/Navbar";
import bytesBrainsChallengeIMG from "../assets/bytes&Brainschallenge_1_1.png";
import techTalkArenaIMG from "../assets/techTalkArena_1_1.png";
import huntTheBug from "../assets/huntTheBug_1-1.png";
import promptIMG from "../assets/promp.img_1-1.jpg";
import innovative_expo from "../assets/innovative_expo_1-1.png";

const TechEvents = () => {
  const techEvents = [
    { name: "Prompt.img", img: promptIMG },
    { name: "Tech Talk Arena", img: techTalkArenaIMG },
    { name: "Hunt the Bug", img: huntTheBug },
    { name: "Innovative Expo", img: innovative_expo },
    { name: "Byte & Brain Challenges", img: bytesBrainsChallengeIMG },
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
                    <div className="p-3 flex flex-col justify-around items-center gap-3">
                      <h1 className="p-5 text-center font-medium text-xl tracking-wide">
                        {event.name}
                      </h1>
                      <Link to={`/tech-events/${event.name}`}>
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

export default TechEvents;
