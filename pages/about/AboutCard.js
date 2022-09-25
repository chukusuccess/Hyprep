import React from "react";

export const AboutCard = (props) => {
  const { header, paragraph } = props;
  return (
    <div className="sm:w-[370px] sm:h-[400px] h-[400px] w-full rounded-2xl bg-white shadow-lg flex flex-col items-center justify-between ">
      <div className="w-full h-[70%] rounded-tr-2xl rounded-tl-2xl bg-noContent"></div>
      <h1 className="text-2xl font-semibold font-merriweather">{header}</h1>
      <p className="pb-6 font-light">{paragraph}</p>
    </div>
  );
};
