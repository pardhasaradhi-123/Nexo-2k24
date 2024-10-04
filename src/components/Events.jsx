import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgVid from "../assets/event_bgVid.mp4";
import img from "../assets/Jeppiaar University-1-1.png";
import { MdViewList } from "react-icons/md";
import { FaListUl } from "react-icons/fa";

const Events = () => {
  const techEvents = [
    { name: "Innovative-Expo", img: img },
    { name: "Tech Talk Arena", img: img },
    { name: "Bytes & Brains Challenge", img: img },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center relative p-5">
        <video
          src={bgVid}
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="relative z-10">
            <article>
              <div>
                <h1
                  className="text-center font-bold text-3xl"
                  data-aos="fade-up"
                >
                  Tech Events
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-[2rem] max-md:grid-cols-2 max-sm:grid-cols-1 py-5">
                {techEvents.map((event, index) => {
                  return (
                    <article
                      key={index}
                      data-aos="zoom-in"
                      className="max-w-80 border-2 border-t-0 rounded-md flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105"
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
              <div className="flex justify-center items-center">
                <button
                  className="flex justify-center items-center gap-3 bg-gradient-to-tr from-yellow-950 to-yellow-900 hover:bg-gradient-to-t hover:from-yellow-950 hover:to-yellow-900 hover:scale-110 hover:tracking-wide transition-transform text-white p-3 rounded-md uppercase font-semibold"
                  data-aos="flip-left"
                  data-aos-delay="100"
                >
                  <MdViewList />
                  view all
                </button>
              </div>
            </article>
          </div>
          <div className="relative z-10">
            <article>
              <div>
                <h1
                  className="text-center font-bold text-3xl"
                  data-aos="fade-up"
                >
                  Non-Tech Events
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-[2rem] max-md:grid-cols-2 max-sm:grid-cols-1 py-5">
                {techEvents.map((event, index) => {
                  return (
                    <article
                      key={index}
                      data-aos="zoom-in"
                      className="max-w-80 border-2 border-t-0 rounded-md flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105"
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
              <div className="flex justify-center items-center">
                <button
                  className="flex justify-center items-center gap-3 bg-gradient-to-tr from-yellow-950 to-yellow-900 hover:bg-gradient-to-t hover:from-yellow-950 hover:to-yellow-900 hover:scale-110 hover:tracking-wide transition-transform text-white p-3 rounded-md uppercase font-semibold"
                  data-aos="flip-left"
                  data-aos-delay="100"
                >
                  <FaListUl />
                  view all
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
