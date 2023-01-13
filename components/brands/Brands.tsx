import React from "react";
import { ContentData } from "../../store/ContentData";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-blue-500/5 rounded-md lg:w-full mx-auto w-11/12 justify-center h-fit lg:my-8 my-4 py-6 lg:py-8 px-2 flex ">
      {ContentData.brand.map((brandlist) => (
        <div
          key={brandlist.imageUrl}
          className="w-fit lg:px-6 px-1 flex items-center justify-center"
        >
          <Image
            src={brandlist.imageUrl}
            alt="brands"
            className="w-11/12"
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
