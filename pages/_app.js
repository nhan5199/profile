import Footer from "@/components/common/Footer";
import Header from "@/components/common/header";
import "@/styles/globals.css";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  /*scroll top handle*/
  const displayScrollTop = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  const scrollTopContols = useAnimationControls();
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        scrollTopContols.start("show");
      } else {
        scrollTopContols.start("hide");
      }
    });
  });
  return (
    <div className="relative">
      <motion.button
        onClick={scrollToTop}
        variants={displayScrollTop}
        initial="hide"
        animate={scrollTopContols}
        whileHover={{ scale: 1.2 }}
        className="fixed z-10 bottom-10 right-10 w-10 cursor-pointer duration-300 ease-in"
      >
        <FaArrowCircleUp size="30px" title="Scroll to top" />
      </motion.button>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
