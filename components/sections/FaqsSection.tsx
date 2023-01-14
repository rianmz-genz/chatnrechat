import React, { useEffect, useState } from "react";
import { ContentData } from "../../store/ContentData";
import FaqList from "../faq/FaqList";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const FaqsSection = () => {
  const { faq } = ContentData;
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="mt-8 lg:text-center w-11/12 mx-auto">
      <p data-aos="fade-up" className="font-description font-semibold text-sm mb-3 text-[#0C1B4D]">
        {faq.toptitle}
      </p>
      <h1 data-aos="fade-up" className="text-2xl font-title text-[#0C1B4D]">{faq.title}</h1>
      <p data-aos="fade-up" className="font-description lg:w-6/12 mx-auto mt-3 text-[#0C1B4D99]">
        {faq.description}
      </p>
      <div className="lg:mt-9 mt-4 lg:w-8/12 mx-auto">
        {faq.faqs.map((faqitem) => (
          <FaqList 
            key={faqitem.title}
            description={faqitem.description}
            title={faqitem.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqsSection;
