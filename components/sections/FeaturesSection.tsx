import React, { useEffect } from "react";
import { ContentData } from "../../store/ContentData";
import FeaturesCard from "../features/FeaturesCard";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const FeaturesSection = () => {
  const { featuresection } = ContentData;
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="lg:w-full w-11/12 mx-auto">
      <p
        data-aos="fade-up"
        className="font-description text-sm font-semibold mb-3 text-[#0C1B4D]"
      >
        {featuresection.toptitle}
      </p>
      <h1 data-aos="fade-up" className="text-2xl font-title text-[#0C1B4D]">
        {featuresection.title}
      </h1>
      <p
        data-aos="fade-up"
        className="font-description lg:w-4/12 mx-auto mt-3 text-[#0C1B4D99]"
      >
        {featuresection.description}
      </p>
      <div data-aos="zoom-in" className="w-full flex lg:flex-row flex-col">
        {featuresection.features.map((feature) => (
          <FeaturesCard
            key={feature.imageUrl}
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
