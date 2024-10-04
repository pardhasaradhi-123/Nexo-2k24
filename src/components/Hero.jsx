import React from "react";
import logo from "../assets/logo.png";
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={logo}
            alt=""
            className="w-[650px]"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <Link to="https://linktr.ee/Nexodus2k24">
            <button
              className="flex justify-center items-center gap-3 bg-gradient-to-tr from-yellow-950 to-yellow-900 hover:bg-gradient-to-t hover:from-yellow-950 hover:to-yellow-900 hover:scale-110 hover:tracking-wide transition-transform text-white p-3 rounded-md uppercase font-semibold"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <GiArchiveRegister />
              register now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
