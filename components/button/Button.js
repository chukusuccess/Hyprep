import React from "react";

export const Button = ({ color, background, textColor, text }) => {
  return (
    <button
      className={`py-4 px-12 border text-sm mt-4 border-solid border-[${color}] bg-[${background}] hover:bg-green-800 hover:border-green-800 rounded-md text-${textColor} capitalize`}
    >
      {text}
    </button>
  );
};
