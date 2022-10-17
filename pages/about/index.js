import React, { Fragment } from "react";
import MainLayout from "../../layout/MainLayout";
import { AboutCard } from "../../components/AboutCard";
const chairman =
  "https://hyprep.gov.ng/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-16-at-1.16.35-PM.jpeg";
const about = "https://hyprep.gov.ng/wp-content/uploads/2022/07/DSC_0804.jpg";

const AboutHyprep = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section
            className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${about})`,
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-center">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                about hyprep
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                Hydrocarbon Pollution Remediation Project (HYPREP)
              </h2>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center text-black">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                ABOUT HYPREP
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                Restoring Environmental SUSTAINABILITY, LIVELIHOODS, <br />{" "}
                SECURITY AND GOVERNANCE IN OGONI LAND
              </h2>
              <p className="text-left">
                HYPREP was established under the Federal Ministry of Environment
                to achieve the under listed objectives in Ogoniland and other
                impacted communities:
              </p>
              <br />
              <li>
                Determine the scope, means and modalities of remediation of soil
                and ground water contamination in impacted communities as may be
                recommended by HYPREP Governing Council and remedy them.
              </li>
              <br />
              <li>
                Enhance local capacity for better environmental management and
                promote awareness of sound environmental management as well as
                ensure livelihoods and sustainable development.
              </li>
              <br />
              <li>
                Ensure security and promote peace building efforts in impacted
                communities.
              </li>
              <br />
              <li>
                Strengthen governance, transparency and accountability in the
                region.
              </li>
              <br />
            </div>
          </section>
          <section className="sm:py-4 sm:px-[140px] py-4 px-[30px] pb-20 sm:pb-20 items-center w-full bg-white flex flex-col">
            <div className="sm:w-[1155px] sm:h-[572px] w-full h-[50vw] bg-noContent rounded-2xl "></div>
          </section>
          <section className="bg-backgroundPrimary w-full sm:h-[724px] flex sm:flex-row flex-col-reverse items-center justify-center gap-12 sm:p-[137px] p-[30px] pt-12">
            <div className="text-left sm:h-[450px] sm:w-[520px]">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                board of trustees
              </h3>
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-4">
                Chairman Board of Trustees (HYPREP)
              </h2>
              <p className="pb-10 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vitae proin interdum vivamus venenatis eu. Netus nisl magna
                volutpat volutpat est, arcu ultricies eu. Tempus sagittis,
                varius vel volutpat integer consequat. Ultrices elit feugiat
                amet porttitor sed enim nisl eget lorem. Tincidunt lorem ante
                sed hendrerit. Sagittis leo turpis porttitor facilisis euismod.
                Varius maecenas purus magna nisi, risus, sem mauris tempor.
              </p>
            </div>
            <div
              className="hidden sm:flex rounded-2xl bg-noContent sm:h-[433px] sm:w-[509px]"
              style={{
                background: `url(${chairman})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="sm:hidden w-full flex flex-row items-start justify-start">
              <div
                className="rounded-2xl bg-noContent w-[50%] h-[50vw]"
                style={{
                  background: `url(${chairman})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </section>
          <section className="flex flex-col w-full bg-backgroundPrimary sm:py-10 sm:px-[140px] py-10 px-[30px] items-center justify-center">
            <div>
              <div className="text-left w-full">
                <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                  Composition of the Board of
                  <br /> Trustees
                </h2>
                <p className="text-left pb-6">
                  The Board of Trustees (BOT) shall consist of the following;
                </p>
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10 w-full">
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10 w-full">
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10 w-full">
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
                <AboutCard
                  header="Belema George"
                  paragraph="Product Designer"
                />
              </div>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div className="text-left">
              <h2 className="sm:text-3xl text-xl font-merriweather font-bold pb-6">
                Functions of the Board of the Board of Trustee (BOT)
              </h2>
              <p className="text-left">
                The functions of the Board of Trustee are;
              </p>
              <br />
              <li>
                Carry out financial oversight that ensures that the use of
                financial controls and that funds are prudently utilized in
                accordance with established financial policies related to
                HYPREP.
              </li>
              <br />
              <li>
                Liaise with and manage the disbursement of the funds gifts,
                grants-in-aid from national, bilateral and multinational
                organisations, agencies and bodies, including Fund Contributors
                and Participating Entities, for any approved project related to
                an established Trust Fund.
              </li>
              <br />
              <li>
                Release funds to the PCO as approved by the HYPREP Governing
                Council.
              </li>
              <br />
              <li>
                Carry out internal and external financial audit of allowance and
                disbursed funds
              </li>
              <br />
              <li>
                Ensure that funds are timely made available for the
                implementation of the of activities as may be approved by the
                HYPREP Governing Council
              </li>
              <br />
              <li>
                Execute an escrow agreement with an Escrow Bank approved
                unanimously by the Board of Trustees
              </li>
              <br />
              <li>
                Ensure that the PCO prepares a funding schedule for each
                Calendar Year at least prior to 30th September of the previous
                Calendar Year and each Funding Schedule shall set out the
                estimated cash requirements of HYPREP, for each quarter of the
                Calendar Year to which it relates, for the project execution
                based on the annual budget approved by the Governing Council.
              </li>
              <br />
            </div>
          </section>
        </div>
      </MainLayout>
    </Fragment>
  );
};

export default AboutHyprep;
