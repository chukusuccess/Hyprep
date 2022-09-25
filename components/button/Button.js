import React from "react";

export const Button = ({ color, background, textColor, text }) => {
  return (
    <button
      className={`p-2 px-5 border text-sm mt-4 border-solid border-[${color}] bg-[${background}] rounded-md text-${textColor} capitalize`}
    >
      {text}
    </button>
  );
};
