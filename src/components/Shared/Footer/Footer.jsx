import { Link } from "react-router-dom";
import logo from "../../../assets/logo/Future-Edge.jpg";
import email from "../../../assets/footer/email.png";
import location from "../../../assets/footer/location.png";
import telephone from "../../../assets/footer/telephone.png";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import toast from "react-hot-toast";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleContactDropdown = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleClick = () => {
    toast.success("This feature is coming soon!");
  };

  return (
    <div className=" bg-orange-50">
      <footer className="footer text-black p-5 lg:p-[118px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14">
        <aside className="">
          <img
            className="w-[150px] lg:w-[235px] lg:h-[119px] mb-5"
            src={logo}
            alt="360d soul logo"
          />
          <div className="text-justify   font-medium font-['Inter']">
            360D SOUL Limited has adopted the highest standards of IT service
            and consultancy quality and operational excellence, enabling its
            clients across a wide range of industries to transform into a truly
            digital, data-driven enterprise.
          </div>
          <div className="flex gap-3 my-[30px] ">
            <Link
              to="https://www.facebook.com/groups/796711704378134/"
              target="_blank"
            >
              <FaFacebookSquare
                className="text-4xl  "
                alt="AAA facebook logo"
              />
            </Link>
            <Link to="/" onClick={handleClick}>
              <FaSquareInstagram
                className="text-4xl  "
                alt="AAA instagram logo"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/company/360dsoul/posts"
              target="_blank"
            >
              <FaLinkedin className="text-4xl  " alt="AAA linkedin logo" />
            </Link>
            <Link to="/" onClick={handleClick}>
              <FaSquareXTwitter className="text-4xl  " alt="AAA twitter logo" />
            </Link>
          </div>
        </aside>

        <nav>
          <div className=" text-2xl md:text-4xl font-bold font-['Inter'] flex items-center justify-between">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none flex items-center md:hidden justify-between w-full text-xl"
            >
              Solutions
              {isOpen ? (
                <FaChevronUp className="ml-44" />
              ) : (
                <FaChevronDown className="ml-44" />
              )}
            </button>
            <div className="hidden md:flex items-center">
              <div>
                Solutions
                <div className="flex mt-3">
                  <span className="border-[3px] border-[#f58a1f] w-[25px]"></span>
                  <span className="border-[3px] border-[#898b8d] w-[30px]"></span>
                  <span className="border-[3px] border-black w-[35px]"></span>
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-3 mt-[25px] md:hidden">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/IT-Strategy"
                className="link link-hover   text-[18px]"
              >
                IT Strategy
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/HR-Strategy"
                className="link link-hover   text-[18px]"
              >
                HR Strategy
              </Link>
            </div>
          )}
          <div className="hidden md:flex flex-col gap-3 mt-[25px]">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/IT-Strategy"
              className="link link-hover   text-[18px]"
            >
              IT Strategy
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/HR-Strategy"
              className="link link-hover   text-[18px]"
            >
              HR Strategy
            </Link>
          </div>
        </nav>

        <nav>
          <div className=" text-2xl md:text-4xl font-bold font-['Inter'] flex items-center justify-between">
            <button
              onClick={toggleServicesDropdown}
              className="focus:outline-none flex items-center md:hidden justify-between w-full text-xl"
            >
              Services
              {isServicesOpen ? (
                <FaChevronUp className="ml-[195px]" />
              ) : (
                <FaChevronDown className="ml-[195px]" />
              )}
            </button>
            <div className="hidden md:flex items-center">
              <div>
                Services
                <div className="flex mt-3">
                  <span className="border-[3px] border-[#f58a1f] w-[25px]"></span>
                  <span className="border-[3px] border-[#898b8d] w-[30px]"></span>
                  <span className="border-[3px] border-black w-[35px]"></span>
                </div>
              </div>
            </div>
          </div>
          {isServicesOpen && (
            <div className="flex flex-col gap-3 mt-[25px] md:hidden">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/IT-Services"
                className="link link-hover   text-[18px]"
              >
                IT Services
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/HR-Services"
                className="link link-hover   text-[18px]"
              >
                HR Services
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/Career-Counselling"
                className="link link-hover   text-[18px]"
              >
                Career Counselling
              </Link>
            </div>
          )}
          <div className="hidden md:flex flex-col gap-3 mt-[25px]">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/IT-Services"
              className="link link-hover   text-[18px]"
            >
              IT Services
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/HR-Services"
              className="link link-hover   text-[18px]"
            >
              HR Services
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/Career-Counselling"
              className="link link-hover   text-[18px]"
            >
              Career Counselling
            </Link>
          </div>
        </nav>

        <nav>
          <div className=" text-2xl md:text-4xl font-bold font-['Inter'] flex items-center justify-between">
            <button
              onClick={toggleContactDropdown}
              className="focus:outline-none flex items-center md:hidden justify-between w-full text-xl"
            >
              Contact Us
              {isContactOpen ? (
                <FaChevronUp className="ml-[173px]" />
              ) : (
                <FaChevronDown className="ml-[173px]" />
              )}
            </button>
            <div className="hidden md:flex items-center">
              <div>
                Contact Us
                <div className="flex mt-3">
                  <span className="border-[3px] border-[#f58a1f] w-[25px]"></span>
                  <span className="border-[3px] border-[#898b8d] w-[30px]"></span>
                  <span className="border-[3px] border-black w-[35px]"></span>
                </div>
              </div>
            </div>
          </div>
          {isContactOpen && (
            <div className="flex flex-col gap-3 mt-[25px] md:hidden">
              <div className="flex gap-3">
                <img src={location} alt="location" />
                <a href="" className="  text-[18px]">
                  House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216
                </a>
              </div>
              <div className="flex gap-3">
                <img src={email} alt="email" />
                <p className="  text-[18px]">info@360dsoul.com</p>
              </div>
              <div className="flex gap-3">
                <img src={telephone} alt="telephone" />
                <p className="  text-[18px]">+880 1922-000025</p>
              </div>
            </div>
          )}
          <div className="hidden md:flex flex-col gap-3 mt-[25px]">
            <p className="text-justify   font-medium font-['Inter']">
              We’re just a click away, ready to discuss your business needs and
              provide the perfect IT solutions.
            </p>
            <div className="flex gap-3">
              <FaLocationDot className="text-4xl   " alt="location" />

              <a href="" className="  text-[18px]">
                House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216
              </a>
            </div>
            <div className="flex gap-3">
              <MdEmail className="text-3xl   " alt="email" />

              <p className="  text-[18px]">riad@aaa-fe.com</p>
            </div>
            <div className="flex gap-3">
              <BsFillTelephoneFill className="text-3xl  " alt="telephone" />

              <p className="  text-[18px]">+8801922000025</p>
            </div>
          </div>
        </nav>
      </footer>
      <h5 className="text-center  font-[Inter] text-sm pb-10">
        © 2024 Design & Developed By{" "}
        <a href="https://360dsoul.com/" target="_blank">
          <strong>360D Soul Ltd.</strong>
        </a>
      </h5>
    </div>
  );
};

export default Footer;
