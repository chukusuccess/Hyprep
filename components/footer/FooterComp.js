import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterComp = () => {
  return (
    <section className="w-full bg-backgroundDark sm:h-[650px]">
      <div className="sm:w-full sm:h-[73px] hidden sm:flex bg-white">
        <div className="sm:w-[450px] sm:ml-[80px] sm:h-full bg-noContent"></div>
      </div>
      <div className="sm:w-full sm:h-[500px] flex w-full h-full sm:flex-row flex-col">
        <div className="sm:w-[450px] sm:ml-[80px] sm:h-full flex flex-col gap-5 font-poppins font-light text-white bg-noContent text-left p-12">
          <h1 className="text-3xl">FRAUD ALERT !!!</h1>
          <p>
            The public is hereby warned to beware of fraudsters hiding under the
            guise of providing employment or contracts to defraud innocent
            Nigerians.
          </p>
          <p>
            The Hydrocarbon Pollution Remediation Project, HYPREP, hereby
            reminds the public to be wary of anyone promising to offer them
            employment or contracts with HYPREP. Every information about HYPREP
            is available on our dedicated portals:
          </p>
          <p>
            Please, visit these pages or the office at 350 Aba Road, Port
            Harcourt for any enquiries.
          </p>
        </div>
        <div className="sm:w-[400px] w-full sm:ml-[80px] sm:py-24 py-12 px-12 flex flex-row sm:justify-center justify-between sm:gap-12 text-lg font-merriweather sm:h-full">
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <p>About us</p>
            <p>Project</p>
            <p>Report</p>
            <p>News</p>
            <p>Media</p>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Socials</h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faLinkedin} width={20} color="white" />{" "}
                <p>Linked In</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faTwitter} width={20} color="white" />
                <p>Twitter</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faFacebook} width={20} color="white" />
                <p>Facebook</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faInstagram} width={20} color="white" />
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-full w-full h-[10px] text-center px-10 py-10 flex flex-row items-center justify-center text-white sm:text-1xl text-sm sm:font-semibold font-light font-merriweather">
        Copyright © All rights reserved. | Newsium by AF themes.
      </div>
    </section>
  );
};

export default FooterComp;
