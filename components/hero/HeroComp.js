import React from "react";
import { Button } from "../button/Button";

const HeroComp = () => {
  return (
    <section className="flex w-full sm:px-20 px-6">
      <div className="flex-grow space-y-6 mt-12">
        <h2 className="uppercase text-base mb-2 text-[#00FF64]">
          federal ministry of environment
        </h2>
        <h1 className="sm:text-5xl text-4xl text-white font-poppins font-semibold">
          Hydrocarbon Pollution Remediation Project (HYPREP)
        </h1>
        <div className="flex gap-4">
          <Button
            color="red"
            text="learn more"
            background="#00FF64"
            textColor="white"
          />
          <Button
            color="red"
            text="watch online"
            background="none"
            textColor="white"
          />
        </div>
      </div>
      <div className="w-full"></div>
    </section>
  );
};

export default HeroComp;
