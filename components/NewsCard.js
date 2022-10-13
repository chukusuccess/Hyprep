import Link from "next/link";
import React from "react";

export const NewsCard = (props) => {
  const { heading, paragraph, route } = props;
  return (
    <div className="sm:h-[423px] sm:w-[370px] border-2 border-gray-50 rounded-lg flex flex-col items-end justify-center p-10 bg-white shadow-lg ">
      <div className="sm:h-[75%] sm:w-full mb-4 flex flex-col items-start justify-start gap-8">
        <h1 className="text-black text-2xl font-semibold font-merriweather">
          {heading}
        </h1>
        <p className="text-gray-700">{paragraph}</p>
      </div>
      <div className="w-full flex flex-row items-center justify-center">
        <div className=" bg-white p-3 rounded-[300px] hover:bg-green-600 cursor-pointer ">
          <Link href={`${route}`} target="_blank">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#1B1C1E"
                  fillOpacity="0.8"
                  d="M8.32 17.92l6.72-6.72H.4V8.8h14.64L8.32 2.08 10 .4l9.6 9.6-9.6 9.6-1.68-1.68z"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
