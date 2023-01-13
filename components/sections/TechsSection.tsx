import Image from "next/image";
import React from "react";
import { ContentData } from "../../store/ContentData";

const TechsSection = () => {
  const { techs } = ContentData;
  return (
    <div className="flex justify-center items-center">
      <Image
        className="w-6/12"
        src="/images/techimage.svg"
        alt="techimage"
        width={100}
        height={100}
      />
      <div className="w-6/12">
        <p className="font-description font-semibold mb-3 text-[#0C1B4D]">
          {techs.toptitle}
        </p>
        <h1 className="text-2xl font-title text-[#0C1B4D]">{techs.title}</h1>
        <p className="font-description mx-auto mt-3 mb-8 text-[#0C1B4D99]">
          {techs.description}
        </p>
        {techs.technology.map((tech) => (
          <div key={tech.emoticon} className="flex mb-5">
            <div className="w-12 h-12 text-3xl flex items-center justify-center rounded-lg bg-blue-500/10">
              {tech.emoticon}
            </div>
            <div className="w-11/12 ml-5">
              <h2 className="font-title text-xl text-black">{tech.title}</h2>
              <p className="text-[#0C1B4D99]">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechsSection;
