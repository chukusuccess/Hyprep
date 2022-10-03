import React from "react";

export const Button = ({ color, background, textColor, text }) => {
  return (
    <button
      className={`sm:py-4 sm:px-12 py-2 px-4 border text-sm mt-4 border-solid border-[${color}] bg-[${background}] hover:bg-green-800 hover:border-green-800 rounded-md text-${textColor} capitalize`}
    >
      {text}
    </button>
  );
};
