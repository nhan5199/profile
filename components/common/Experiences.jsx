import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ExperienceDetail from "../shared/ExperienceDetail";

const Experiences = () => {
  const divRef = useRef();

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "center start"],
  });

  return (
    <div className="w-8/12 flex flex-col items-center justify-center m-auto  h-full">
      <h1 className="text-5xl my-10 font-bold">Experiences</h1>
      <div
        className="flex flex-col items-center justify-center relative"
        ref={divRef}
      >
        <motion.div
          className="progress-bar absolute w-[3px] h-full top-0 left-0 bg-black origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8 },
          }}
          className="w-10/12 flex flex-col items-center justify-center"
        >
          <ExperienceDetail
            title="University of Science"
            time="2017 - 2021"
            content="I am proudly to say that I have the opportunity to learn in of of the best university that teaches Information Technology, with so many great teachers and friends"
            imgName="hcmus.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8 },
          }}
          className="w-10/12 flex flex-col items-center justify-center"
        >
          <ExperienceDetail
            title="University of Science"
            time="2017 - 2021"
            content="I am proudly to say that I have the opportunity to learn in of of the best university that teaches Information Technology, with so many great teachers and friends"
            imgName="ftel.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8 },
          }}
          className="w-10/12 flex flex-col items-center justify-center"
        >
          <ExperienceDetail
            title="University of Science"
            time="2017 - 2021"
            content="I am proudly to say that I have the opportunity to learn in of of the best university that teaches Information Technology, with so many great teachers and friends"
            imgName="hcmus.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8 },
          }}
          className="w-10/12 flex flex-col items-center justify-center"
        >
          <ExperienceDetail
            title="University of Science"
            time="2017 - 2021"
            content="I am proudly to say that I have the opportunity to learn in of of the best university that teaches Information Technology, with so many great teachers and friends"
            imgName="ftel.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8 },
          }}
          className="w-10/12 flex flex-col items-center justify-center"
        >
          <ExperienceDetail
            title="University of Science"
            time="2017 - 2021"
            content="I am proudly to say that I have the opportunity to learn in of of the best university that teaches Information Technology, with so many great teachers and friends"
            imgName="hcmus.jpg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
