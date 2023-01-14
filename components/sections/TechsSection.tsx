import Image from "next/image";
import React, { useEffect } from "react";
import { ContentData } from "../../store/ContentData";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const TechsSection = () => {
  const { techs } = ContentData;
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex justify-center lg:flex-row flex-col items-center">
      <Image
        data-aos="flip-right"
        className="lg:w-6/12 w-11/12 mx-auto"
        src="/images/techimage.svg"
        alt="techimage"
        width={100}
        height={100}
      />
      <div className="lg:w-6/12 w-11/12 mx-auto">
        <p
          data-aos="fade-left"
          className="font-description font-semibold mb-3 text-[#0C1B4D]"
        >
          {techs.toptitle}
        </p>
        <h1 data-aos="fade-left" className="text-2xl font-title text-[#0C1B4D]">
          {techs.title}
        </h1>
        <p
          data-aos="fade-left"
          className="font-description mx-auto mt-3 mb-8 text-[#0C1B4D99]"
        >
          {techs.description}
        </p>
        {techs.technology.map((tech) => (
          <div data-aos="fade-left" key={tech.emoticon} className="flex mb-5">
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
