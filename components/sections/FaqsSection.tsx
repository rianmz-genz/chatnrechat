import React, { useState } from "react";
import { ContentData } from "../../store/ContentData";

const FaqsSection = () => {
  const { faq } = ContentData;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="mt-8 lg:text-center w-11/12 mx-auto">
      <p className="font-description font-semibold text-sm mb-3 text-[#0C1B4D]">
        {faq.toptitle}
      </p>
      <h1 className="text-2xl font-title text-[#0C1B4D]">{faq.title}</h1>
      <p className="font-description lg:w-6/12 mx-auto mt-3 text-[#0C1B4D99]">
        {faq.description}
      </p>
      <div className="lg:mt-9 mt-4 lg:w-8/12 mx-auto">
        {faq.faqs.map((faqitem) => (
          <div
            key={faqitem.title}
            className={`relative w-full duration-200 transition-all text-start px-4 rounded-lg mb-2 py-2 ${
              isOpen ? "bg-blue-500 text-white shadow-lg  shadow-blue-500/60 " : ""
            }`}
          >
            <h1 className="font-title text-lg flex justify-between border-b border-[#0c1b4d24] py-4">
              {faqitem.title}
              <button onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? (
                  <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.96875 15L12.9688 9L18.9688 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                ) : (
                    <svg
                    className="cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#0C1B4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </h1>
            <div className={`transition-all duration-200 ${isOpen ? "py-2 block opacity-100" : "hidden -py-20 opacity-0"}`}>
                <p className="text-sm">{faqitem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsSection;
