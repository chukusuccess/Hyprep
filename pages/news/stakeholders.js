import React from "react";
import { NewsCard2 } from "../../components/NewsCard2";
import MainLayout from "../../layout/MainLayout";

const StakeholdersPage = () => {
  return (
    <MainLayout>
      <div>
        <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center items-start text-white">
          <div className="text-left">
            <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
              STAKEHOLDERS PROCUREMENT
            </h3>
            <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </h2>
            <p></p>
          </div>
        </section>
        <section className="sm:py-12 sm:px-[140px] py-16 px-[30px] items-center w-full bg-backgroundPrimary flex flex-col">
          <div className="sm:w-[1155px] sm:h-[600px] w-full h-[50vw] bg-noContent rounded-2xl ">
            <div
              className="bg-noContent sm:h-full sm:w-full flex flex-col sm:gap-8 gap-1 items-start justify-end sm:p-16 w-full h-[50vw] p-3 rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h5 className="uppercase text-gray-300 font-light sm:mb-4 mb-1 sm:p-3 p-2 bg-backgroundDark rounded-[100px] opacity-70 text-sm">
                BREAKING NEWS
              </h5>
              <p className="sm:text-xl text-sm font-merriweather text-white sm:pb-6 pb-1">
                HYPREP holds seminar to dissuade Ogoni youths from illegal oil
                bunkering and re-pollution of remediated sites.
              </p>
              <a className="text-green-400 font-bold text-lg underline">
                read more
              </a>
            </div>
          </div>
        </section>
        <section className="sm:py-10 sm:px-[140px] pb-10 py-10 px-[30px] w-full bg-white flex flex-col items-center">
          <div className="text-center mb-10">
            <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
              LATEST NEWS
            </h3>
            <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h2>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default StakeholdersPage;
