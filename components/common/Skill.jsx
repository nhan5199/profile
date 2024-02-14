import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const skillList = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Angular",
    "React",
    "Nextjs",
    "Nodejs",
    "SQL Server",
    "Oracle",
    "SQL",
    "MVC",
    "C#",
    ".Net",
    "FrontEnd",
    "BackEnd",
    "Fullstack",
  ];
  const listMotion = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillItem = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="w-8/12 m-auto flex flex-col items-center justify-center min-h-[100svh]">
      <h2 className="text-5xl font-bold">My skills</h2>
      <motion.ul
        variants={listMotion}
        initial="initial"
        whileInView="whileInView"
        className="flex items-center justify-center gap-2 flex-wrap my-5"
      >
        {skillList.map((item, index) => {
          return (
            <motion.p
              whileHover={{ y: -10, transition: { duration: 0.5 } }}
              variants={skillItem}
              className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
              key={index}
            >
              {item}
            </motion.p>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Skill;
