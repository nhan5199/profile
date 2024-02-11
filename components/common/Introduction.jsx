import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Introduction = () => {
  const listImgs = [1, 2, 3, 4];
  const quotes = [
    {
      title: "Teamwork and Communicate",
      content:
        "Teamwork is the harmonious symphony of minds, where individual strengths converge to achieve a collective vision. Communication serves as the conductor, guiding each note and ensuring every melody resonates in unison, transforming a project into a masterpiece.",
    },
    {
      title: "Planning and Schedulng",
      content:
        "In any project, meticulous planning and scheduling act as the architects of success, blueprinting every move and orchestrating progress with seamless efficiency.",
    },
    {
      title: "Programming Languages",
      content:
        "In the realm of learning new programming languages, each syntax becomes an eloquent conduit, translating human ingenuity into machine logic with finesse and clarity.",
    },
    {
      title: "Self study and Independent",
      content:
        "Self-study and independence fuel personal growth, blending curiosity with determination. They empower individuals to explore, experiment, and innovate, forging unique paths of discovery.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);
  const MotionImage = motion(Image);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentSlide + 1 > listImgs.length) {
        setCurrentSlide(1);
        setAnimationKey(animationKey + 1);
      } else {
        setCurrentSlide(currentSlide + 1);
        setAnimationKey(animationKey + 1);
      }
    }, 100000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentSlide, listImgs.length, animationKey]);

  const quote = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.5 },
    },
  };

  const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const quoteContent = {
    initial: { opacity: 0, transition: { duration: 3 } },
    animate: { opacity: 1, transition: { delay: 1, duration: 3 } },
  };

  const image = {
    initial: { opacity: 0, y: 50, transition: { duration: 1 } },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="w-full h-full px-32 my-5 flex items-center justify-evenly gap-10">
      <div className="intro-img w-1/3 flex items-center justify-center h-[85svh]">
        <MotionImage
          src={`/images/image-section-${currentSlide}.png`}
          alt="title"
          width={400}
          height={400}
          style={{ objectFit: "fill" }}
          variants={image}
          animate="animate"
          initial="initial"
        />
      </div>

      <div className="intro-quote w-2/3 flex flex-col items-center justify-center gap-10">
        <motion.div
          key={currentSlide}
          variants={quote}
          animate="animate"
          initial="initial"
        >
          {quotes[currentSlide - 1].title.split(" ").map((word, index) => {
            return (
              <motion.span
                variants={singleWord}
                key={index + "-" + word}
                className="inline-block text-5xl text-blue-500 font-bold"
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.div>

        <motion.div
          key={"content" + animationKey}
          variants={quoteContent}
          animate="animate"
          initial="initial"
          className="text-gray-500 flex items-center text-2xl justify-center break-words"
        >
          {quotes[currentSlide - 1].content}
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
