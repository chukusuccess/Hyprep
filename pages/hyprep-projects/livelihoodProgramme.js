import React, { Fragment } from "react";
import { CardOne } from "../../components/Card-one";
import { CardTwo } from "../../components/Card-two";
import MainLayout from "../../layout/MainLayout";
const birds =
  "https://hyprep.gov.ng/wp-content/uploads/2021/05/live1-768x1024.jpg";
const meeting =
  "https://hyprep.gov.ng/wp-content/uploads/2021/05/YOUTHS-300x200.jpg";
const gifts = "https://hyprep.gov.ng/wp-content/uploads/2021/04/live3.png";

const LivelihoodProgramme = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white">
            <div className="text-left overflow-y-hidden">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                hyprep projects
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                LIVELIHOOD PROGRAMME
              </h2>
              <p className="font-light text-sm sm:text-base">
                Sustainable alternative livelihood programs for the Ogonis
                particularly those engaged in artisanal refining and oil
                bunkering, as well as other initiatives to address the
                socio-economic impacts of oil pollution.
              </p>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center">
            <div className="sm:h-[663px] h-[331px] w-full flex flex-row items-center justify-center sm:gap-[35px] gap-[17px]">
              {/* this div below is for the mobile image */}
              <div
                className="sm:hidden h-full sm:w-[479px] w-[100%] rounded-2xl bg-noContent"
                style={{
                  background: `url(${meeting})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* the div below is for desktop images */}
              <div
                className="hidden sm:flex h-full sm:w-[479px] w-[238px] rounded-2xl bg-noContent"
                style={{
                  background: `url(${birds})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="hidden h-full sm:w-[646px] w-[323px] sm:flex flex-col sm:gap-10 gap-5">
                <div
                  className="h-full w-full rounded-2xl bg-noContent"
                  style={{
                    background: `url(${meeting})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="h-full w-full rounded-2xl bg-noContent"
                  style={{
                    background: `url(${gifts})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                LIVELIHOOD
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                Hon. Minister of Environment launches <br /> Livelihood Needs
                Assessment Forms
              </h2>
              <p className="text-left">
                On 22nd March 2021, at the occasion of the Flag-off of water
                projects in Bori, Khana LGA, the Hon. Minister of Environment
                launched the Livelihood Needs Assessment forms for the training
                of youths and women under the Livelihood Programme of the
                Hydrocarbon Pollution Remediation Project (HYPREP) towards the
                full implementation of the recommendation of UNEP report on the
                restoration of livelihoods of the Ogoni people. <br />
                While launching the forms, the Minister noted that the measure
                is in furtherance of the renewed efforts by HYPREP towards
                restoration of livelihoods in Ogoniland. He explained that the
                Needs Assessment will enable the project identify skill areas
                for training of 5000 youths and women in Ogoniland and stated
                that this will complement the effort of government in job
                creation and maintained that the clean-up project is
                comprehensive as other aspects are also being implemented
                alongside remediation. He recalled successes recorded thus far
                in the livelihood programme to include the training of 400 women
                in agro-allied skills and the partnership with Stakeholder
                Democracy Network (SDN) for the training of 15 Ogoni youths in
                the fabrication of cassava processing machines.
                <br />
                <br />
                <b>Distribution of Support Items to Cooperatives</b>
                <br />
                Also, within the month of March 2021, the Livelihood Unit
                continued the distribution of support items to the twenty (20)
                Cooperatives set up for the four hundred (400) Ogoni women
                training programme. The distribution of the support items was
                carried out in conjunction with our implementing partner, the
                United Nations Institute for Training and Research (UNITAR).
              </p>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-backgroundPrimary flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                testimonials
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                Progress Recorded by the Cooperatives
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <CardOne
                heading="Co-operative"
                subheading="HYPREP"
                paragraph="Training is ongoing, and the distribution of items still in progress. It is important to note that the birds and cucumber seeds distributed in most of the farms have grown and are being harvested."
              />
              <CardOne
                heading="Co-operative"
                subheading="HYPREP"
                paragraph="Training is ongoing, and the distribution of items still in progress. It is important to note that the birds and cucumber seeds distributed in most of the farms have grown and are being harvested."
              />
              <CardOne
                heading="Co-operative"
                subheading="HYPREP"
                paragraph="Training is ongoing, and the distribution of items still in progress. It is important to note that the birds and cucumber seeds distributed in most of the farms have grown and are being harvested."
              />
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                Livelihood reports
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                Key Accomplishments
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <CardTwo
                heading="February 2022"
                paragraph="The Livelihood report for the month of February 2021 covers follow-up activities on the 20 Cooperatives set up for 400 Ogoni women trained in Agribusiness and Entrepreneurial Skills as reported in the month of January 2021."
                report="https://hyprep.gov.ng/wp-content/uploads/2022/04/LIVILIHOOD-REPORT-FEBRUARY-2022.pdf"
              />
              <CardTwo
                heading="March 2022"
                paragraph="The Livelihood report for the month of February 2021 covers follow-up activities on the 20 Cooperatives set up for 400 Ogoni women trained in Agribusiness and Entrepreneurial Skills as reported in the month of January 2021."
                report="https://hyprep.gov.ng/wp-content/uploads/2022/04/LIVELIHOOD-REPORT-FOR-MARCH-2022.pdf"
              />

              <CardTwo
                heading="April 2022"
                paragraph="The Livelihood report for the month of February 2021 covers follow-up activities on the 20 Cooperatives set up for 400 Ogoni women trained in Agribusiness and Entrepreneurial Skills as reported in the month of January 2021."
                report="https://hyprep.gov.ng/wp-content/uploads/2022/05/LIVELIHOOD-REPORT-FOR-APRIL-2022.pdf"
              />
            </div>
            <div className="w-full mt-4 flex flex-row justify-center ">
              <button className="px-12 py-5 bg-green-700 font-bold text-base text-white font-merriweather rounded-lg">
                See all Reports
              </button>
            </div>
          </section>
        </div>
      </MainLayout>
    </Fragment>
  );
};

export default LivelihoodProgramme;
