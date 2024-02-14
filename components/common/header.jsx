import Link from "next/link";
import HeaderLogo from "../shared/HeaderLogo";
import HeaderLink from "../shared/HeaderLink";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      // Adjust based on your needs: use previous position or a threshold
      console.log("data: ", currentScrollPosition);
      if (currentScrollPosition > 200) {
        setDisplayHeader(false);
      } else {
        setDisplayHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full m-auto px-32 py-5 flex items-center justify-between fixed top-0 z-10 bg-white duration-500 ease-in hover:opacity-100 ${
        displayHeader ? "opacity-100" : "opacity-0"
      }`}
    >
      <nav className="left-menu flex items-center justify-between gap-5 ease-in">
        <HeaderLink title="About me" href="about" />
        <HeaderLink title="My projects" href="my-projects" />
        <HeaderLink title="Contacts" href="contacts" />
      </nav>

      <HeaderLogo className="absolute left-[50%] translate-x-[-50%] top-2" />

      <nav className="right-menu flex items justify-between gap-5 text-2xl">
        <motion.a href="/" target="_black" whileHover={{ y: -3, scale: 1.1 }}>
          <FaLinkedin />
        </motion.a>
        <motion.a href="/" target="_black" whileHover={{ y: -3, scale: 1.1 }}>
          <FaFacebookF />
        </motion.a>
        <motion.a href="/" target="_black" whileHover={{ y: -3, scale: 1.1 }}>
          <IoIosMail />
        </motion.a>
      </nav>
    </header>
  );
};

export default Header;
