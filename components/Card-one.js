import React from "react";

export const CardOne = (props) => {
  const { icon, heading, subheading, paragraph } = props;
  return (
    <div className="sm:h-[425px] sm:w-[363px] border-2 border-gray-50 rounded-2xl flex flex-col items-end justify-center p-10 bg-white shadow-lg ">
      <div className="sm:h-[98%] sm:w-full mb-4 flex flex-col items-start gap-2">
        <div className="w-[80px] h-[80px] rounded-[600px] bg-red-700 ">
          {icon}
        </div>
        <h1 className="text-black sm:text-2xl text-xl font-semibold font-merriweather">
          {heading}
        </h1>
        <h4 className="font-bold text-sm">{subheading}</h4>
        <p className="text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
};
