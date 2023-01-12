import Image from "next/image";
import React from "react";
import { ContentData } from '../../store/ContentData';

const Navbar = () => {
  const {navbar} = ContentData
  return (
    <nav className="w-full h-fit pt-8">
      <ul className="flex items-center">
        <li className="w-3/12">
        <Image src="/images/icon.svg" alt="icon" width={30} height={30} />
        </li>
        <div className="w-5/12 flex space-x-10 items-center">
          {navbar.map((item)=> (
            <li key={item.title} className="w-full font-description first:font-semibold"><a href={item.href}>{item.title}</a></li>
          ))}
        </div>
        <li className="w-2/12 flex ml-auto justify-end">
            <a href="#" className="bg-[#4A72FF] shadow-xl shadow-blue-600/30 px-8 py-2 font-description rounded-md font-semibold text-white">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
