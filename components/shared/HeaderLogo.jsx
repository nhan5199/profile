import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);
const HeaderLogo = ({ className }) => {
  return (
    <div className={className}>
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        NN
      </MotionLink>
    </div>
  );
};

export default HeaderLogo;
