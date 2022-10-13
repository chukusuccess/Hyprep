import React from "react";
import { NewsCard } from "../../components/NewsCard";
import MainLayout from "../../layout/MainLayout";

const NewsletterPage = () => {
  return (
    <MainLayout>
      <div>
        <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center items-start text-white">
          <div className="text-left">
            <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
              NEWSLETTERS
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </h2>
            <p></p>
          </div>
        </section>
        <section className="sm:py-10 sm:px-[140px] pb-10 py-10 px-[30px] w-full bg-white flex flex-col items-center">
          <div className="text-center mb-10">
            <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
              LATEST NEWSLETTER RELEASE
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Most recent news releases from HYPREP
            </h2>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard
              route="http://hyprep.gov.ng/wp-content/uploads/2022/09/HYPREP-Newsletter-OCTOBER-2022.pdf"
              heading="OCTOBER 2022"
              paragraph="The Hydrocarbon Pollution Remediation Project (HYPREP) is
              moving on to
              the intertidal/shoreline remediation of the Ogoni coastal
              communities. This signals the
              commencement of the clean-up,
              remediation and restoration of semicomplex and complex sites."
            />
            <NewsCard
              route="http://hyprep.gov.ng/wp-content/uploads/2022/08/HYPREP-Newsletter-SEPTEMBER-2022.pdf"
              heading="SEPTEMBER 2022"
              paragraph="The Hydrocarbon Pollution Remediation Project (HYPREP) is
              moving on to
              the intertidal/shoreline remediation of the Ogoni coastal
              communities. This signals the
              commencement of the clean-up,
              remediation and restoration of semicomplex and complex sites."
            />
            <NewsCard
              route="http://hyprep.gov.ng/wp-content/uploads/2022/07/HYPREP-Newsletter-AUG-2022.pdf"
              heading="AUGUST 2022"
              paragraph="The Hydrocarbon Pollution Remediation Project (HYPREP) is
              moving on to
              the intertidal/shoreline remediation of the Ogoni coastal
              communities. This signals the
              commencement of the clean-up,
              remediation and restoration of semicomplex and complex sites."
            />
          </div>
        </section>
        <section className="sm:py-10 sm:px-20 py-10 px-[30px] w-full bg-backgroundPrimary flex flex-col text-black">
          <div className="text-left">
            <div className="w-full flex sm:flex-row flex-col-reverse justify-between">
              <div>
                <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                  OLDER NEWSLETTER RELEASE
                </h3>
                <h2 className="text-3xl font-merriweather font-bold pb-6">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </h2>
              </div>
              <div className="flex flex-row sm:gap-10 gap-5 w-full sm:w-[375px] mb-10 sm:mb-0 justify-between">
                <div>
                  <p className="text-gray-700">Start date</p>
                  <input
                    type="date"
                    name="start"
                    className="px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none"
                    placeholder="Start date"
                  />
                </div>
                <div>
                  <p className="text-gray-700">End date</p>
                  <input
                    type="date"
                    name="end"
                    className="px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none"
                    placeholder="End date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mt-10 mb-10">
            <NewsCard
              route="http://hyprep.gov.ng/wp-content/uploads/2022/06/HYPREP-Newsletter-JULY-2022.pdf"
              heading="JULY 2022"
              paragraph="The Ogoni
              Power Project is a sterling initiative of the Hydrocarbon Pollution Remediation Project (HYPREP), geared towards a rejuvenation of the economic potentials of Ogoniland and an enhanced livelihood of our people."
            />
            <NewsCard
              route="http://hyprep.gov.ng/wp-content/uploads/2022/05/HYPREP-Newsletter-JUNE-2022.pdf"
              heading="JUNE 2022"
              paragraph="The Ogoni
              Power Project is a sterling initiative of the Hydrocarbon Pollution Remediation Project (HYPREP), geared towards a rejuvenation of the economic potentials of Ogoniland and an enhanced livelihood of our people."
            />
            <NewsCard
              route="http://hyprep.gov.ng/wp-content/uploads/2022/04/HYPREP-Newsletter-MAY-2022.pdf"
              heading="MAY 2022"
              paragraph="The Ogoni
              Power Project is a sterling initiative of the Hydrocarbon Pollution Remediation Project (HYPREP), geared towards a rejuvenation of the economic potentials of Ogoniland and an enhanced livelihood of our people."
            />
          </div>
          {/* <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard
              route="/"
              heading="SEPTEMBER 2022"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. "
            />
            <NewsCard
              route="/"
              heading="SEPTEMBER 2022"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu.  
"
            />
            <NewsCard
              route="/"
              heading="SEPTEMBER 2022"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. 
"
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard
              route="/"
              heading="SEPTEMBER 2022"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. "
            />
            <NewsCard
              route="/"
              heading="SEPTEMBER 2022"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu.  
"
            />
            <NewsCard
              route="/"
              heading="SEPTEMBER 2022"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. 
"
            />
          </div> */}
        </section>
      </div>
    </MainLayout>
  );
};

export default NewsletterPage;
