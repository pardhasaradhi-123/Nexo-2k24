import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import CD_logo from "../assets/CD logo.jpeg";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerBgImg from "../assets/footer_bg.jpg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  const socialLinks = [
    {
      icon: <FaInstagram size={35} />,
    },
    {
      icon: <FaFacebook size={35} />,
    },
    {
      icon: <FaLinkedin size={35} />,
    },
    {
      icon: <FaTwitter size={35} />,
    },
  ];

  return (
    <div
      className="p-5 h-auto relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBgImg})` }} // Set the background image
    >
      <div className="grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-10 max-lg:grid-cols-2 max-lg:gap-9">
        {/* Company Logo Section */}
        <div className="flex justify-center items-center">
          <img
            src={CD_logo}
            alt="Company Logo"
            className="w-[35%]"
            data-aos="fade-up" // AOS animation for logo
          />
        </div>

        {/* Social Links Section */}
        <div
          className="flex flex-col justify-center items-center gap-10"
          data-aos="fade-up"
        >
          <h1 className="capitalize text-2xl tracking-wide">social links</h1>{" "}
          {/* Added AOS to header */}
          <div className="flex justify-center items-center gap-10">
            {socialLinks.map((eachLink, index) => (
              <Link key={index}>
                <p>{eachLink.icon}</p> {/* AOS animation for social icons */}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div
          className="flex flex-col justify-center items-center gap-8"
          data-aos="fade-up"
        >
          <h1 className="capitalize text-2xl tracking-wide">contact us</h1>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="font-semibold text-xl">
              Staff Co-ordinator:{" "}
              <span className="font-medium text-base">+91 8012635713</span>
            </p>
            <p className="font-semibold text-xl">
              Student Co-ordinator:{" "}
              <span className="font-medium text-base">+91 9345497425</span>
            </p>
            <p className="font-medium text-base max-sm:text-sm">
              nexodus2k24jeppiaaruniversity@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
