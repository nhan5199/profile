import Image from "next/image";
import React from "react";

const ExperienceDetail = ({ title, time, content, imgName }) => {
  return (
    <div className="flex items-center justify-center my-5 gap-10 shadow-xl rounded-lg">
      <div className="image flex items-center justify-center">
        <Image
          className="object-fill rounded-md"
          width={500}
          height={500}
          src={`/images/${imgName}`}
          alt="experience-photo"
        />
      </div>
      <div className="info flex flex-col items-start justify-center">
        <p className="title font-bold text-2xl">{title}</p>
        <p className="time font-bold">From: {time}</p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default ExperienceDetail;
