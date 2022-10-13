import React, { Fragment } from "react";
import { CardTwo } from "../../components/Card-two";
import MainLayout from "../../layout/MainLayout";

const Remediation = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                hyprep projects
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                REMEDIATION
              </h2>
              <p>
                Clean-up of the hydrocarbon impacted sites,
                <br /> restoration of artisanal refining sites and any other
                identified polluted sites
                <br /> in the report including the clean-up of contaminated
                land, treatment of contaminated sediments, decontamination of
                groundwater,
                <br />
                treatment of surface water, restoration of swamplands, mangrove
                restoration and rehabilitation, surveillance, and monitoring
                during <br />
                and following clean-up operations in Ogoniland.
              </p>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                REMEDIATION
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Active Remediation Works and NOSDRA Close-out / Certification
                Sampling.
              </h2>
              <p className="text-left">
                Remediation work is actively in progress at Lot 009 out of the
                five (5) outstanding Lots in Phase 1 Batch 1 Remediation Project
                Lots/Sites. <br />
                At Lot 009 (Saanako – Mogho, Gokana L.G.A), the Contractor has
                evacuated the dredged sand from the project site to a suitable
                part of the area and has already achieved more than half of
                excavation of impacted soil at the delineated area as well as
                treatment of parts thereof. The Monitoring{" "}
                {`{Quality Assurance / Quality Control (QAQC)}`} processes by
                HYPREP and the Contractor have already commenced, preparatory to
                backfilling of the large part of the excavated area. <br />
                The other four (4) outstanding Phase 1 Batch 1 Remediation Lots
                (Lot 011 and 012 at Debon-Bodo/Mogho, Lot 013 at Nweekol Zorbuke
                –K.Dere and Lot 016 (Korokoro Well 005) are at present out of
                site awaiting completion processes for milestone payments.{" "}
                <br /> Close-out / Certification Sampling was completed at three
                (3) of the sites in Phase 1 Batch 1 in the period covered in
                this report. The sites include Lot 019 and 020 at Buemene
                Korokoro Well 8 in Tai L.G.A as well as Lot 014 (Nweekol
                Zorbuke, K.Dere in Gokana L.G.A). The Rivers State Ministry of
                Environment and Natural Resources (RMENR) and the Social
                Democracy Network (SDN) also participated in the process which
                is statutorily driven by the National Oil Spill Detection and
                Response Agency (NOSDRA).
              </p>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center">
            <div className="sm:h-[663px] h-[331px] w-full flex flex-row items-center justify-center sm:gap-[35px] gap-[17px]">
              {/* this div below is for the mobile image */}
              <div className="sm:hidden h-full sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
              {/* the div below is for desktop images */}
              <div className="hidden sm:flex h-full sm:w-[479px] w-[238px] rounded-2xl bg-noContent"></div>
              <div className="hidden h-full sm:w-[646px] w-[323px] sm:flex flex-col sm:gap-10 gap-5">
                <div className="h-full w-full rounded-2xl bg-noContent"></div>
                <div className="h-full w-full rounded-2xl bg-noContent"></div>
              </div>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-backgroundPrimary flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                Remediation reports
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                PHASE 1 BATCHES 1 & 2 <br />
                REMEDIATION PROJECT STATUS <br />
                REPORTS.
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <CardTwo
                heading="REPORT OF HYPREP ACTIVITIES FOR MARCH 2021"
                paragraph="Setting up of site offices had begun at twenty-seven (27) out of the twenty-nine (29) Phase 1, Batch 2 remediation sites..."
              />
              <CardTwo
                heading="REPORT OF HYPREP ACTIVITIES FOR MARCH 2021"
                paragraph="Setting up of site offices had begun at twenty-seven (27) out of the twenty-nine (29) Phase 1, Batch 2 remediation sites..."
              />
              <CardTwo
                heading="REPORT OF HYPREP ACTIVITIES FOR MARCH 2021"
                paragraph="Setting up of site offices had begun at twenty-seven (27) out of the twenty-nine (29) Phase 1, Batch 2 remediation sites..."
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

export default Remediation;
