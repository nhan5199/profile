import React, { useRef } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [aboutMeHover, setAboutMeHover] = useState(false);
  const [myProjectsHover, setMyProjectsHover] = useState(false);
  const [contactsHover, setContactsHover] = useState(false);
  const [onExpand, setOnExpand] = useState(false);
  const [below850, setBelow850] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerHeightRef = useRef(null);
  let headerHeight = useRef(0);
  const handleMouseEnterAboutMe = () => {
    setAboutMeHover(!aboutMeHover);
  };

  const handleMouseEnterMyProjects = () => {
    setMyProjectsHover(!myProjectsHover);
  };

  const handleMouseEnterContacts = () => {
    setContactsHover(!contactsHover);
  };

  const handleOnExpand = () => {
    setOnExpand(!onExpand);
    console.log(onExpand);
  };

  useEffect(() => {
    function handleResize() {
      setBelow850(window.innerWidth < 850);
      setIsMobile(window.innerWidth < 750); //this should be less than 600, but there is a bug
    }

    headerHeight = 0;
    console.log(headerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section>
      <div
        ref={headerHeightRef}
        className={`flex items-center justify-between m-auto p-1 ${
          below850 ? "w-full p-4" : "w-11/12"
        }`}
      >
        <div className="logo flex flex-col items-center justify-between gap-3">
          <Link href="/">
            <p
              className={`flex logo-name gap-2 ${
                isMobile ? "text-xl" : "text-3xl"
              }`}
            >
              Nguyễn
              <span className="font-medium cursor-pointer ease-in duration-300 hover:text-green-600">
                Nhân
              </span>
            </p>
          </Link>
          <p className="quotes text- text-gray-400 font-medium italic gap-2">
            <RiDoubleQuotesL className="inline mb-3" />
            To Infinity and beyond!
            <RiDoubleQuotesR className="inline mb-3" />
          </p>
        </div>

        <div className="middle-nav text-base">
          <ul
            className={`flex items-center justify-between gap-10 opacity-60 ${
              below850
                ? onExpand
                  ? `flex-col absolute top-${headerHeight} left-0 w-full`
                  : "flex-col mt-[-500px]"
                : "flex-row"
            }
            `}
          >
            <Link
              target="_blank"
              className={`flex items-center justify-center gap-2 ease-in duration-300 hover:text-green-600 ${
                aboutMeHover ? "font-medium text-lg" : ""
              }`}
              href="/about-me"
              alt="about me"
              onMouseEnter={handleMouseEnterAboutMe}
              onMouseLeave={handleMouseEnterAboutMe}
            >
              <MdKeyboardDoubleArrowRight
                className={`inline ${
                  aboutMeHover
                    ? "opacity-100 ease-in duration-300 text-green-600"
                    : "opacity-0"
                }`}
              />
              <span>About me</span>
              <MdKeyboardDoubleArrowLeft
                className={`inline ${
                  aboutMeHover
                    ? "opacity-100 ease-in duration-300 text-green-600"
                    : "opacity-0"
                }`}
              />
            </Link>
            <Link
              target="_blank"
              className={`flex items-center justify-center gap-2 ease-in duration-300 hover:text-green-600 ${
                myProjectsHover ? "font-medium text-lg" : ""
              }`}
              onMouseEnter={handleMouseEnterMyProjects}
              onMouseLeave={handleMouseEnterMyProjects}
              href="/my-projects"
              alt="my projects"
            >
              <MdKeyboardDoubleArrowRight
                className={`inline ${
                  myProjectsHover
                    ? "opacity-100 ease-in duration-300 text-green-600"
                    : "opacity-0"
                }`}
              />
              <span>My projects</span>
              <MdKeyboardDoubleArrowLeft
                className={`inline ${
                  myProjectsHover
                    ? "opacity-100 ease-in duration-300 text-green-600"
                    : "opacity-0"
                }`}
              />
            </Link>
            <Link
              target="_blank"
              className={`flex items-center justify-center gap-2 ease-in duration-300 hover:text-green-600 ${
                contactsHover ? "font-medium text-lg" : ""
              }`}
              onMouseEnter={handleMouseEnterContacts}
              onMouseLeave={handleMouseEnterContacts}
              href="/contacts"
              alt="contact me"
            >
              <MdKeyboardDoubleArrowRight
                className={`inline ${
                  contactsHover
                    ? "opacity-100 ease-in duration-300 text-green-600"
                    : "opacity-0"
                }`}
              />
              <span>Contacts</span>
              <MdKeyboardDoubleArrowLeft
                className={`inline ${
                  contactsHover
                    ? "opacity-100 ease-in duration-300 text-green-600"
                    : "opacity-0"
                }`}
              />
            </Link>
          </ul>
        </div>

        <div className="right-nav">
          <ul
            className={`flex items-center justify-between gap-6 ${
              below850 ? "text-2xl" : "text-xl"
            }`}
          >
            <Link
              target="_blank"
              className="opacity-60 hover:opacity-100"
              href="https://www.linkedin.com/in/nh%C3%A2n-nguy%E1%BB%85n-926b74283/"
            >
              <FaLinkedin title="LinkedIn" />
            </Link>
            <Link
              target="_blank"
              className="opacity-60 hover:opacity-100"
              href="https://github.com/nhan5199"
            >
              <FaGithub title="Github" />
            </Link>
            <span
              className={`cursor-pointer ${below850 ? "block" : "hidden"}`}
              onClick={handleOnExpand}
            >
              {onExpand ? <IoMdClose /> : <GiHamburgerMenu />}
            </span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
