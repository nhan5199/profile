import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
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
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          HTML
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          CSS
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Javascript
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Typescript
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Angular
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          React
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Nextjs
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Nodejs
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          SqlServer
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Oracle
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          SQL
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          MVC
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          FrontEnd
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          BackEnd
        </motion.p>
        <motion.p
          whileHover={{ y: -10, transition: { duration: 0.5 } }}
          variants={skillItem}
          className="inline-block p-2 bg-gray-400 rounded-md  cursor-pointer"
        >
          Fullstack
        </motion.p>
      </motion.ul>
    </div>
  );
};

export default Skill;
