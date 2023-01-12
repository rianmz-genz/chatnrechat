import React from "react";
import { ContentData } from "../../store/ContentData";
import Image from "next/image";

const HomeSection = () => {
  const { home } = ContentData;
  return (
    <div
      className="mt-10 w-full h-fit py-3 flex justify-center items-center"
    >
      <div className="w-6/12 ">
        <p className="text-sm text-[#4A72FF] mb-4">{home.toptitle}</p>
        <h1 className="text-4xl font-title text-[#0C1B4D]">{home.title}</h1>
        <p className="mt-4 text-lg">{home.description}</p>
        <div className="w-8/12 mt-6 flex justify-between">
          <button className="bg-[#4A72FF] shadow-xl shadow-blue-600/30 text-white flex items-center py-3 px-10 rounded-md">
            {home.buttonleft}
            <svg
              className="ml-3"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99999 19.2707C14.6024 19.2707 18.3333 15.5397 18.3333 10.9373C18.3333 6.33497 14.6024 2.60401 9.99999 2.60401C5.39762 2.60401 1.66666 6.33497 1.66666 10.9373C1.66666 15.5397 5.39762 19.2707 9.99999 19.2707Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14.2707L13.3333 10.9373L10 7.60401"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66666 10.9373H13.3333"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="bg-blue-500/10 text-blue-500 flex items-center py-3 px-10 rounded-md">
            {home.buttonright}
          </button>
        </div>
        <div className="flex mt-8">
        <div className="flex">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 15.4373V19.4373C21 19.9678 20.7893 20.4765 20.4142 20.8516C20.0391 21.2266 19.5304 21.4373 19 21.4373H5C4.46957 21.4373 3.96086 21.2266 3.58579 20.8516C3.21071 20.4765 3 19.9678 3 19.4373V15.4373"
              stroke="#0C1B4D"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 10.4373L12 15.4373L17 10.4373"
              stroke="#0C1B4D"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15.4373V3.43735"
              stroke="#0C1B4D"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="ml-8 pr-8 border-r">
            <p className="font-inter font-light text-xs">TOTAL DOUN'TLOUD</p>
            <p className="font-inter font-bold text-xl text-[#0C1B4D]">
              {home.totaldownloads}
            </p>
          </div>
        </div>
        <div className="flex ml-7">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21.4373V19.4373C20 18.3765 19.5786 17.3591 18.8284 16.6089C18.0783 15.8588 17.0609 15.4373 16 15.4373H8C6.93913 15.4373 5.92172 15.8588 5.17157 16.6089C4.42143 17.3591 4 18.3765 4 19.4373V21.4373"
              stroke="#0C1B4D"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11.4373C14.2091 11.4373 16 9.64649 16 7.43735C16 5.22821 14.2091 3.43735 12 3.43735C9.79086 3.43735 8 5.22821 8 7.43735C8 9.64649 9.79086 11.4373 12 11.4373Z"
              stroke="#0C1B4D"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="ml-8 pr-8">
            <p className="font-inter font-light text-xs">TOTAL USERS</p>
            <p className="font-inter font-bold text-xl text-[#0C1B4D]">
              {home.totalusers}
            </p>
          </div>
        </div>
        </div>
      </div>
      <Image
        src={home.mainimage}
        alt="main image"
        width={100}
        height={100}
        className="w-6/12"
      />
    </div>
  );
};

export default HomeSection;
