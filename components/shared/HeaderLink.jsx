import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

const HeaderLink = ({ title, href }) => {
  const route = useRouter();
  return (
    <motion.div className="relative group">
      <a href={href} alt={title} className={`font-semibold `}>
        {title}
      </a>
      <span
        className={`${
          route.asPath.toLowerCase() === href.toLowerCase() ? "w-full" : "w-0"
        } inline-block absolute h-[2px] bg-black bottom-0 left-0 ease-in duration-300 group-hover:w-full `}
      >
        &nbsp;
      </span>
    </motion.div>
  );
};

export default HeaderLink;
