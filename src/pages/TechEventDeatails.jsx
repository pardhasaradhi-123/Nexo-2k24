import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import bgVid from "../assets/eventDetailsBgVid.mp4";
import eventDatails from "../assets/eventDetailsData";
import img from "../assets/aboutEventLogo.jpg";

const TechEventDeatails = () => {
  const { name } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (you can adjust this)
    });
  }, []);

  const detailsData = eventDatails.find((event) => event.name === name);
  return (
    <div className="h-full flex justify-center items-center relative">
      <video
        src={bgVid}
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      ></video>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <div className="w-full">
          <div
            data-aos="fade-down"
            className="h-screen w-screen max-sm:h-full max-md:h-full max-lg:h-full"
          >
            <img
              src={img}
              alt="img"
              className="h-full w-screen max-sm:h-full max-md:h-full max-lg:h-full"
            />
          </div>
          <div className="p-5">
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <h1 className="text-4xl font-bold">{detailsData?.name}</h1>
            </div>
            <div className="my-3" data-aos="fade-down">
              <p className="text-2xl font-semibold tracking-wide">
                Description:
              </p>
              <p className="text-xl p-5 text-center max-sm:text-left">
                {detailsData.desc}
              </p>
            </div>
            <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <h1 className="text-2xl font-semibold">Rules:</h1>
              {detailsData.rules.map((eachRule, index) => {
                return (
                  <li
                    key={index}
                    className="mx-10 py-2 list-decimal max-sm:py-1"
                  >
                    {eachRule}
                  </li>
                );
              })}
            </ul>
            <p
              className="text-center italic text-3xl max-sm:text-2xl p-3"
              data-aos="zoom-in"
            >
              {detailsData.prizes}
            </p>
            <div
              className="grid grid-cols-3 gap-[2rem] max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 p-8"
              data-aos="fade-down"
            >
              <p className="text-lg border-gray-400 border-2 p-3 rounded-md backdrop-blur-sm flex flex-col text-center">
                <span className="text-xl font-semibold tracking-wide text-left">
                  Venue:{" "}
                </span>{" "}
                {detailsData.venue}
              </p>
              <p className="text-lg border-gray-400 border-2 p-3 rounded-md backdrop-blur-sm flex flex-col text-center">
                <span className="text-xl font-semibold tracking-wide text-left">
                  Event Time:{" "}
                </span>
                {detailsData.eventTime}
              </p>
              <p className="text-lg border-gray-400 border-2 p-3 rounded-md backdrop-blur-sm flex flex-col text-center">
                <span className="text-xl font-semibold tracking-wide text-left">
                  Registration Fee:{" "}
                </span>
                {detailsData.registrationFee}
              </p>
              <p className="text-lg text-center border-gray-400 border-2 p-3 rounded-md backdrop-blur-sm flex flex-col">
                <span className="text-xl text-left font-semibold tracking-wide">
                  Staff Co-Ordinaters:{" "}
                </span>
                {detailsData.staffCoordinate}
              </p>
              <p className="text-lg text-center border-gray-400 border-2 p-3 rounded-md backdrop-blur-sm flex flex-col">
                <span className="text-xl font-semibold tracking-wide text-left">
                  Student Co-Ordinaters:{" "}
                </span>
                {detailsData.studentCoordinate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechEventDeatails;
