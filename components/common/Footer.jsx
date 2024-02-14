import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const MotionLink = motion(Link);
  return (
    <div className="w-10/12 m-auto py-3 flex items-center justify-between border-t-[1px] border-gray-500 text-gray-500">
      <div className="personal-info w-6/12 flex flex-col items-start justify-center">
        <strong>Nhan0510</strong>
        <p>
          Authorized by <strong>Nguyen Nhan</strong> @2024
        </p>
        <p>
          Please feel free to send me comments or reviews through my Gmail and
          LinkedIn
        </p>
      </div>
      <div className="menu-tags w-3/12 flex flex-col items-start justify-center">
        <Link href="/about" className="ease-in duration-100 hover:font-bold">
          About me
        </Link>
        <Link
          href="/my-projects"
          className="ease-in duration-100 hover:font-bold"
        >
          Some of my projects
        </Link>
      </div>
      <div className="contacts w-3/12 flex items-start justify-center gap-3">
        <p>My contacts: </p>
        <nav className="right-menu flex items justify-between gap-3 text-2xl">
          <MotionLink
            href="/"
            target="_black"
            whileHover={{ y: -3, scale: 1.1, color: "black" }}
          >
            <FaLinkedin />
          </MotionLink>
          <MotionLink
            href="/"
            target="_black"
            whileHover={{ y: -3, scale: 1.1, color: "black" }}
          >
            <IoIosMail />
          </MotionLink>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
