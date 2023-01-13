import React from "react";
import { ContentData } from '../../store/ContentData';
import FeaturesCard from "../features/FeaturesCard";
const FeaturesSection = () => {
    const { featuresection } = ContentData;
  return (
    <div className="lg:w-full w-11/12 mx-auto">
      <p className="font-description text-sm font-semibold mb-3 text-[#0C1B4D]">
        {featuresection.toptitle}
      </p>
      <h1 className="text-2xl font-title text-[#0C1B4D]">
        {featuresection.title}
      </h1>
      <p className="font-description lg:w-4/12 mx-auto mt-3 text-[#0C1B4D99]">
        {featuresection.description}
      </p>
      <div className="w-full flex lg:flex-row flex-col">
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
