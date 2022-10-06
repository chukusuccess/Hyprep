import React, { Fragment } from "react";
import MainLayout from "../../layout/MainLayout";
import { Location } from "../../components/icons/Location";
import { Email } from "../../components/icons/Email";
import { Phone } from "../../components/icons/Phone";

const ContactHyprep = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section className="sm:py-20 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                contact us
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </h2>
            </div>
          </section>
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-row items-center justify-center text-black">
            <div className="flex flex-col-reverse sm:flex-row w-full gap-20">
              <div className="text-left flex flex-col justify-center gap-14 p-10 py-14 bg-gradient-to-r from-[#015321] to-[#00A336] text-white w-full sm:w-[40%] font-recoleta">
                <div className="flex flex-row gap-5">
                  <div className="flex flex-col">
                    <Location />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Our Address</h1>
                    <p className="font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed donec aenean sed sodales blandit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-col pt-1">
                    <Email />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Email Addresses</h1>
                    <p className="font-light">Info@doxhub.com</p>
                    <p>Doxhub.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-col pt-1">
                    <Phone />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Phone Numbers</h1>
                    <p className="font-light">08012232321</p>
                    <p>+23489764521</p>
                  </div>
                </div>
              </div>
              <div className="text-left text-white w-full sm:w-[60%]">
                <div className="w-full flex flex-col">
                  <h1 className="font-bold text-black text-2xl">Contact Us</h1>
                  <p className="text-gray-800 pb-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                    quam magna mi amet, integer.
                  </p>
                  <form className="flex flex-col gap-5 text-black">
                    <div className="flex-col">
                      <p className="font-bold font-poppins text-gray-800">
                        Full Name
                      </p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        className="border-2 rounded-lg p-3 border-gray-200 w-full"
                      />
                    </div>
                    <div className="flex-col">
                      <p className="font-bold font-poppins text-gray-800">
                        Email Address
                      </p>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        className="border-2 rounded-lg p-3 border-gray-200 w-full"
                      />
                    </div>
                    <div className="flex-col">
                      <p className="font-bold font-poppins text-gray-800">
                        Phone Number
                      </p>
                      <input
                        type="tel"
                        name="phone_number"
                        placeholder="+234000 0000 000"
                        className="border-2 rounded-lg p-3 border-gray-200 w-full"
                      />
                    </div>
                    <div className="flex-col">
                      <p className="font-bold font-poppins text-gray-800">
                        How can we help?
                      </p>
                      <textarea
                        type="text"
                        name="issue"
                        placeholder="Tell us about your project..."
                        rows="6"
                        className="border-2 rounded-lg p-3 border-gray-200 w-full"
                      />
                    </div>
                    <div className="flex flex-row w-full items-start">
                      <button className="py-2 px-4 bg-green-700 text-white rounded-lg">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </Fragment>
  );
};

export default ContactHyprep;
