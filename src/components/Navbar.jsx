import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import logo from "../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaUsersCog, FaUsers } from "react-icons/fa";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  const navLinks = [
    {
      name: "home",
      path: "/",
      icon: <FaHome size={28} />,
    },
    {
      name: "Tech Events",
      path: "/tech-events",
      icon: <FaUsersCog size={28} />,
    },
    {
      name: "Non Tech Events",
      path: "/non-tech-events",
      icon: <FaUsers size={28} />,
    },
  ];

  return (
    <div className="w-screen">
      <div className="flex justify-around items-center" data-aos="fade-down">
        <div className="w-32 flex justify-center items-center">
          <img src={logo} alt="logo" data-aos="fade-right" />
        </div>
        <ul className="flex justify-center items-center gap-9">
          {navLinks.map((eachNav, index) => {
            return (
              <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Link to={eachNav.path}>
                  <p className="uppercase font-semibold tracking-wide text-lg max-md:text-base max-lg:text-base flex justify-center items-center gap-3 max-md:gap-20">
                    {eachNav.icon}
                    <span className="max-sm:hidden max-md:hidden max-lg:hidden">
                      {eachNav.name}
                    </span>
                  </p>
                </Link>
              </li>
            );
          })}
          <Link
            to="https://forms.gle/pezEirrmEtt9UYYx5"
            className="max-sm:hidden max-md:hidden max-lg:hidden"
          >
            <button
              className="flex justify-center items-center gap-3 bg-gradient-to-tr from-yellow-950 to-yellow-900 hover:bg-gradient-to-t hover:from-yellow-950 hover:to-yellow-900   transition-transform text-white p-3 rounded-md uppercase font-semibold"
              data-aos="flip-left"
              data-aos-delay="500" // Add AOS attributes
            >
              <GiArchiveRegister />
              register now
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
