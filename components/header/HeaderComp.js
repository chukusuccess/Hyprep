import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HeaderComp = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="bg-backgroundDark font-merriweather sm:p-3 sm:py-6 sm:px-20 fixed z-50 w-full">
      <nav className="w-full flex items-center sm:justify-between">
        <div className="hidden sm:flex">
          <img src="/images/logo.svg" className="w-[5rem]" alt="logo" />
        </div>
        <div className="hidden sm:flex">
          <ul className="inline-flex text-white gap-8 text-sm cursor-pointer">
            <li className="capitalize mx-2 hover:text-green-600 sm:text-xl active:text-green-600">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="capitalize mx-2 dropdown sm:text-xl hover:text-green-600 active:text-green-600">
              <a className="dropbtn">About Us</a>
              <ul className="dropdown-content">
                <li>
                  <Link href="/about">
                    <a>About HYPREP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/governingCouncil">
                    <a>Governing Council</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/projectCordinator">
                    <a>Project Cordinator Office</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="capitalize mx-2 dropdown sm:text-xl hover:text-green-600 active:text-green-600">
              <a className="dropbtn">Projects</a>
              <ul className="dropdown-content">
                <li>
                  <Link href="/hyprep-projects/electricityProject">
                    <a>Electricity Project</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hyprep-projects/livelihoodProgramme">
                    <a>Livelihood Programme</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hyprep-projects/remediation">
                    <a>Remidiation Project</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hyprep-projects/portableWater">
                    <a>Portable Water</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hyprep-projects/publicHealth">
                    <a>Public Health</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hyprep-projects/schorlarshipProgramme">
                    <a>Scholarship Programme</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="capitalize mx-2 list-none sm:text-xl text-white hover:text-green-600">
              <Link href="/reports">
                <a>Reports</a>
              </Link>
            </li>
            <li className="capitalize mx-2 dropdown sm:text-xl hover:text-green-600 active:text-green-600">
              <a className="dropbtn">News</a>
              <ul className="dropdown-content">
                <li>
                  <Link href="/news">
                    <a>Newsletters</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news/stakeholders">
                    <a>Stakeholders Procurements</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news/pressrelease">
                    <a>Press release</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Trainings</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="capitalize mx-2 sm:text-xl hover:text-green-600 active:text-green-600">
              <Link href="/media">
                <a> Media</a>
              </Link>
            </li>
            <li className="capitalize mx-2 sm:text-xl hover:text-green-600 active:text-green-600">
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:inline-flex sm:text-3xl space-x-2 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} width={35} color="white" />
          <FontAwesomeIcon icon={faFacebook} width={35} color="white" />
          <FontAwesomeIcon icon={faTwitter} width={35} color="white" />
          <FontAwesomeIcon icon={faInstagram} width={35} color="white" />
        </div>
        {/* DESKTOP NAV DIV ENDS HERE */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* MOBILE NAV DIV STARTS HERE */}
        <div className="flex flex-col sm:hidden w-full bg-backgroundDark shadow-md z-50">
          <div className="flex flex-row items-center justify-between px-5 py-3 w-full">
            <img
              src="/images/logo.svg"
              className="w-[2.8rem]"
              alt="Nigerian Coat of Arms"
            />
            <button
              className="text-bold text-4xl text-white pr-2"
              onClick={() => toggleNav()}
            >
              {navbarOpen ? "✕" : "☰"}
            </button>
          </div>
          <div
            className={` ${
              navbarOpen ? "flex" : "hidden"
            } flex-col px-4 w-full`}
          >
            <div className="input-group flex flex-row items-center justify-between w-full mb-4 mt-2">
              <input
                type="search"
                className="form-control min-w-0 w-full py-3 pr-0 pl-6 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding rounded-bl-lg rounded-tl-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-50 focus:outline-none"
                placeholder="Search News"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn px-8 py-4 bg-gray-50 text-gray-500 font-normal text-base leading-tight uppercase rounded-br-lg rounded-tr-lg hover:bg-gray-50 hover:shadow-lg focus:bg-gray-50  focus:shadow-lg focus:outline-none focus:border-gray-50 focus:ring-0 active:bg-gray-50 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <FontAwesomeIcon icon={faSearch} width={20} color="#1C1B1E" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-8 w-full text-white text-lg font-semibold mt-4 px-4 mb-7">
              <li className="capitalize mx-2 list-none text-white hover:text-green-600">
                <Link href="/">
                  <a>⇨ Home</a>
                </Link>
              </li>
              <li className="capitalize mx-2 dropdown list-none hover:text-green-600 active:text-green-600">
                <a className="dropbtn">⇨ About Us</a>
                <ul className="dropdown-content">
                  <li>
                    <Link href="/about">
                      <a>About HYPREP</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/governingCouncil">
                      <a>Governing Council</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/projectCordinator">
                      <a>Project Cordinator Office</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="capitalize mx-2 list-none dropdown hover:text-green-600 active:text-green-600">
                <a className="dropbtn">⇨ Projects</a>
                <ul className="dropdown-content">
                  <li>
                    <Link href="/hyprep-projects/electricityProject">
                      <a>Electricity Project</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyprep-projects/livelihoodProgramme">
                      <a>Livelihood Programme</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyprep-projects/remediation">
                      <a>Remidiation Project</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyprep-projects/portableWater">
                      <a>Portable Water</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyprep-projects/publicHealth">
                      <a>Public Health</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyprep-projects/schorlarshipProgramme">
                      <a>Scholarship Programme</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="capitalize mx-2 list-none text-white hover:text-green-600">
                <Link href="/reports">
                  <a>⇨ Reports</a>
                </Link>
              </li>
              <li className="capitalize mx-2 list-none dropdown hover:text-green-600 active:text-green-600">
                <a className="dropbtn">⇨ News</a>
                <ul className="dropdown-content">
                  <li>
                    <Link href="/news">
                      <a>Newsletters</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news/stakeholders">
                      <a>Stakeholders Procurements</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news/pressrelease">
                      <a>Press release</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Trainings</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="capitalize mx-2 list-none text-white hover:text-green-600">
                <Link href="/media">
                  <a>⇨ Media</a>
                </Link>
              </li>
              <li className="capitalize mx-2 list-none text-white hover:text-green-600">
                <Link href="/contact">
                  <a>⇨ Contact Us</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComp;
