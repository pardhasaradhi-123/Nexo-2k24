import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import university from "../assets/Jeppiaar University-1-1.png";
import bgVid from "../assets/bg_for_about_section.mp4";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative p-10">
        <video
          loop
          autoPlay
          muted
          src={bgVid}
          alt=""
          className="absolute w-full h-full object-cover -z-20"
        />

        <div
          className="w-full text-white my-5 p-5 backdrop-blur-sm max-w-[900px] flex max-sm:flex-col justify-center items-center gap-8 border-2 rounded-lg max-sm:border-none max-sm:backdrop-blur-none"
          data-aos="fade-up" // Add AOS animation to the first section
        >
          <img
            src={university}
            alt="img"
            className="w-[35%] max-sm:w-[75%] rounded-3xl max-sm:rounded-none"
            data-aos="zoom-in" // Add AOS animation to the image
          />
          <div data-aos="fade-left">
            <h1 className="font-bold text-3xl capitalize p-5">about us</h1>
            <p className="font-medium text-center">
              Jeppiaar University, established in 2022 in Chennai, is an
              extension of the visionary work of the late Dr. Jeppiaar through
              the Jeppiaar Educational Trust. The university offers diverse
              programs in technology, arts, and sciences, focusing on both
              theoretical knowledge and industry relevance. With a mission to
              provide innovative, affordable, and globally relevant education,
              Jeppiaar University aims to shape the future of students from
              India and abroad. The institution prioritizes innovation and
              international exposure, equipping students with the skills and
              experiences needed to grow and lead in a globalized world.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="w-full text-white my-5 p-5 max-w-[900px] flex flex-row-reverse justify-center items-center gap-8 border-2 rounded-lg max-sm:border-none"
            data-aos="fade-up"
          >
            <img
              src={university}
              alt="img"
              className="w-[35%] max-sm:hidden"
              data-aos="zoom-in"
            />
            <div data-aos="fade-right">
              <h1
                className="font-bold text-3xl capitalize p-5"
                data-aos="fade-left"
              >
                about event
              </h1>
              <p className="font-medium text-center" data-aos="fade-right">
                Jeppiaar University's School of Engineering and Technology plays
                a pivotal role in organizing this event. As one of the
                university's key academic divisions, the School is dedicated to
                fostering innovation, practical knowledge, and cutting-edge
                research. With a curriculum that emphasizes both academic
                excellence and real-world application, the School offers
                programs designed to meet the evolving demands of various
                industries. By organizing events like this, the School of
                Engineering and Technology provides students with hands-on
                opportunities to engage with industry experts, collaborate on
                innovative projects, and showcase their talents, helping them
                become future-ready professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
