import React from "react";
import { ContentData } from "../../store/ContentData";
import Image from "next/image";

const FooterSection = () => {
  const { footer, navbar } = ContentData;
  return (
    <div className="w-full bg-blue-500/5">
      <div className="w-10/12 mx-auto py-8 flex">
        <div className="w-6/12 ">
          <div className="flex items-center mb-4">
            <Image
              src={footer.brandimage}
              alt={footer.brandname}
              width={100}
              className="w-8"
              height={100}
            />
            <h1 className="font-title ml-3 font-semibold">
              {footer.brandname}
            </h1>
          </div>
          <p className="text-[#0c1b4d99] text-sm">{footer.description}</p>
          <p className="font-title mt-4 font-semibold text-sm">
            {footer.copyright}
          </p>
        </div>
        <div className="w-3/12 pl-8">
          <h1 className="font-title mb-6 font-semibold">Sitemap</h1>
          <div className="flex flex-col mt-1">
            {navbar.map((item) => (
              <a
                className="font-semibold mb-3 text-sm"
                key={item.href}
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-3/12">
          <h1 className="font-title mb-6 font-semibold">Tetap Terhubung</h1>
          <p className="mt-1 text-[#0c1b4d99] text-sm w-10/12">
            Lihat kami pansos di sosial media berikut:
          </p>
          <div className="flex mt-5 cursor-pointer gap-3">
            <div className="w-fit p-2 rounded-lg h-fit bg-blue-600/10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="#0C1B4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5932 15.1512 13.8416 15.5295C13.0901 15.9077 12.2385 16.0394 11.4078 15.9057C10.5771 15.7721 9.80977 15.3799 9.21485 14.785C8.61993 14.1901 8.22774 13.4227 8.09408 12.592C7.96042 11.7614 8.09208 10.9097 8.47034 10.1582C8.8486 9.40667 9.4542 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2649 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z"
                  stroke="#0C1B4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="#0C1B4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-fit p-2 rounded-lg h-fit bg-blue-600/10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#0C1B4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-fit p-2 rounded-lg h-fit bg-blue-600/10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998V2.9998Z"
                  stroke="#0C1B4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
