import React from "react";

export const CardTwo = (props) => {
  const { heading, paragraph } = props;
  return (
    <div className="sm:h-[296px] sm:w-[370px] border-2 border-gray-50 rounded-lg flex flex-col items-end justify-center p-10 bg-white shadow-lg ">
      <div className="sm:h-[98%] sm:w-full mb-4 flex flex-col items-start justify-between">
        <h1 className="text-black text-2xl font-semibold font-merriweather">
          {heading}
        </h1>
        <p className="text-gray-700">{paragraph}</p>
      </div>
      <div className=" bg-white w-full flex flex-row justify-start ">
        <button className="px-3 py-2 border-2 border-green-700 font-bold text-base font-merriweather rounded-[200px]">
          View Report
        </button>
      </div>
    </div>
  );
};
