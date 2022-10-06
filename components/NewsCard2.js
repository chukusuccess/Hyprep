import React from "react";
import { Date } from "./Date";
import { Time } from "./Time";

export const NewsCard2 = (props) => {
  const { date, title, length } = props;
  return (
    <div className="shadow-lg bg-black text-white max-w-sm">
      <img
        className="rounded-t-2xl"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt="hyprep"
      />
      <div className="p-6 bg-transparent flex flex-col gap-5">
        <div>
          <h1 className="text-white text-xl font-bold font-recoleta mb-2">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <button
            type="button"
            className="rounded-[20px] bg-white p-2 text-black text-base hover:scale-105 transition duration-150 ease-in-out"
          >
            Read more
          </button>
          <div className="flex flex-row w-full text-white gap-5">
            <div className="flex flex-row gap-1 items-center justify-center">
              <Date />
              <p className="text-sm font-light">{date}</p>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center">
              <Time />
              <p className="text-sm font-light">{`${length} mins read`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
