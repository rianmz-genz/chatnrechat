import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ContentData } from "../../store/ContentData";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  useEffect(() => {
    AOS.init()
    })
  const { navbar } = ContentData;
  const [isMenu, setIsMenu] = useState<boolean>(false)
  return (
    <nav className="w-full h-fit lg:pt-8 py-3">
      <ul className="flex items-center w-full">
        <li data-aos="fade-right" className="lg:w-3/12 w-8/12 pl-5 flex items-center">
          <Image src="/images/icon.svg" alt="icon" width={30} height={30} />
          <p className="font-title font-semibold ml-2 lg:hidden">CHAT N&apos; RECHAT</p>
        </li>
        <button  data-aos="fade-right" onClick={() => setIsMenu(!isMenu)} className="w-4/12 justify-end flex pr-5 lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M3 12H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <div  data-aos="fade-up" className={`lg:w-5/12 fixed lg:static left-0 top-0 w-full lg:h-fit h-screen bg-blue-500/20 backdrop-blur-sm lg:bg-transparent flex lg:space-x-10 items-center lg:flex-row flex-col lg:p-0 p-10 space-y-3 transition-all duration-200 ${isMenu ? "left-0" : "-left-full"}`}>
          <button onClick={() => setIsMenu(!isMenu)} className="lg:hidden absolute right-7 top-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {navbar.map((item) => (
            <li
              key={item.title}
              className="w-full font-description first:font-semibold"
            >
              <a className="text-xl lg:text-base" href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </div>
        <li  data-aos="fade-left" className="w-2/12 lg:flex ml-auto justify-end hidden">
          <a
            href="#"
            className="bg-[#4A72FF] lg:block shadow-xl shadow-blue-600/30 px-8 py-2 font-description rounded-md font-semibold text-white"
          >
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
