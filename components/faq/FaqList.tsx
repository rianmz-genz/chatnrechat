import React, { FC, useState } from "react";

const FaqList: FC<FaqProps> = ({ description, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      key={title}
      className={`relative w-full text-start px-4 rounded-lg mb-2 py-2 ${
        isOpen ? "bg-blue-500 text-white shadow-lg  shadow-blue-500/60 " : ""
      }`}
    >
      <h1 className="font-title text-lg flex justify-between border-b border-[#0c1b4d24] py-4">
        {title}
        <button onClick={() => setIsOpen(!isOpen)}>
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
      <div
        className={`transition-all duration-200 ${
          isOpen ? "py-2  opacity-100 h-fit" : " h-0 opacity-0"
        }`}
      >
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FaqList;
