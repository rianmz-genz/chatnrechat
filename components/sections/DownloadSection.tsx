import Image from "next/image";
import React from "react";
import { ContentData } from "../../store/ContentData";

const DownloadSection = () => {
  const { download } = ContentData;
  return (
    <div className="w-full bg-blue-500 flex rounded-3xl items-center text-white shadow-2xl shadow-blue-500/60">
      <div className="w-7/12 ">
        <p className="w-8/12 mb-5 mx-auto font-description">
          {download.toptitle}
        </p>
        <h1 className="w-8/12 mx-auto font-title text-3xl mb-5">
          {download.title}
        </h1>
        {download.description.map((list) => (
          <p className="w-8/12 mb-1 mx-auto font-description text-white/60">
            <span className="mr-3">•</span>
            {list}
          </p>
        ))}
        <div className="flex w-8/12 mx-auto mt-8">
          <Image
            src="/images/appstore.svg"
            alt="appstore"
            className="w-5/12 mr-4"
            width={100}
            height={100}
          />
          <Image
            src="/images/playstore.svg"
            alt="playstore"
            className="w-5/12"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="w-5/12">
        <Image
          className="w-10/12"
          src="/images/downloadimage.svg"
          alt="download image"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default DownloadSection;
