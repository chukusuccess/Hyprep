import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Location } from "../icons/Location";
import { Email } from "../icons/Email";
import { Phone } from "../icons/Phone";

const FooterComp = () => {
  return (
    <section className="w-full bg-backgroundDark mt-20 sm:h-[650px]">
      {/* <div className="sm:w-full sm:h-[73px] hidden sm:flex bg-white">
        <div className="sm:w-[450px] sm:ml-[80px] sm:h-full bg-noContent"></div>
      </div> */}
      <div className="sm:w-full relative sm:h-[500px] flex w-full h-full sm:flex-row flex-col">
        <div className="sm:bottom-14 sm:w-96 sm:absolute sm:ml-[80px] sm:h-full flex flex-col gap-5 font-poppins font-light text-white bg-noContent text-left p-12">
          <h1 className="text-2xl text-red-500">FRAUD ALERT !!!</h1>
          <p className="text-[90%]">
            The public is hereby warned to beware of fraudsters hiding under the
            guise of providing employment or contracts to defraud innocent
            Nigerians.
          </p>
          <p className="text-[90%]">
            The Hydrocarbon Pollution Remediation Project, HYPREP, hereby
            reminds the public to be wary of anyone promising to offer them
            employment or contracts with HYPREP. Every information about HYPREP
            is available on our dedicated portals:
          </p>
          <p className="text-[90%]">
            Please, visit these pages or the office at #8 Ken Saro-Wiwa
            (Stadium) Road, Port Harcourt for any enquiries.
          </p>
        </div>
        <div className="sm:absolute sm:right-20 sm:py-24 py-12 px-12 flex flex-col gap-10 sm:flex-row sm:justify-right sm:gap-20 text-lg font-merriweather sm:h-full">
          <div className="text-white font-light text-sm flex flex-col gap-10">
            <div className="flex flex-row items-center gap-3 mb-2">
              <Location />
              <div>
                <h1 className="text-2xl font-bold">Our Address</h1>
                <p>
                  No. 8<br /> Ken Saro-Wiwa(Stadium Road),
                  <br /> Port Harcourt.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 mb-2">
              <Phone />
              <div>
                <h1 className="text-2xl font-bold">Phone Numbers</h1>
                <p>+234 816 8252 624</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 mb-2">
              <Email />
              <div>
                <h1 className="text-2xl font-bold">Email Addresses</h1>
                <p>info@hyprep.gov.ng</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
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
                  <FontAwesomeIcon
                    icon={faInstagram}
                    width={20}
                    color="white"
                  />
                  <p>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] flex flex-row items-center justify-center mt-4">
        <div className="w-[90%] h-full bg-gray-600"></div>
      </div>
      <p className="font-light text-white text-center mt-5">
        All rights reserved © Copyright 2022 | Hydrocarbon Pollution Remediation
        Project
      </p>
    </section>
  );
};

export default FooterComp;
