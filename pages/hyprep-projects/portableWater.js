import React, { Fragment } from "react";
import { CardTwo } from "../../components/Card-two";
import MainLayout from "../../layout/MainLayout";
import bg from "../../public/images/portablewaterbg.png";

const PortableWater = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section
            className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white"
            style={{
              background: `linear-gradient(to right, #000, transparent), url(${bg.src})`,
              backgroundPosition: "left",
            }}
          >
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                hyprep projects
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                PORTABLE WATER
              </h2>
              <p>
                Provision of safe and alternative drinking water for communities
                whose water sources were contaminated by hydrocarbon pollution
                and the rehabilitation of selected existing water supply schemes
                amongst the eight (8) Emergency Measures that warranted
                immediate action.
              </p>
            </div>
          </section>
          <section className="sm:py-32 sm:px-[140px] py-16 px-[30px] items-center w-full bg-white flex flex-col">
            <div className="sm:w-[1155px] sm:h-[372px] w-full h-[50vw] bg-noContent rounded-2xl "></div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                PORTABLE WATER
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                OGONI CLEANUP: <br />
                FG FLAGS OFF SIX WATER PROJECTS
              </h2>
              <p className="text-left">
                The Federal Government has flagged off the Phase 1 of the
                construction of six water projects in continuation of its
                commitment to the full implementation of the UNEP Report on
                Ogoniland. <br />
                Performing the flag-off in Bori, Khana Local Government Area of
                Rivers State, the Honourable Minister for Environment, Dr.
                Mohammad Mahmood Abubakar, stated that the commencement of
                construction of water facilities across communities in Ogoniland
                is a major milestone ‘and a great leap in our journey and
                timeline in achieving the mandate of the Hydrocarbon Pollution
                Remediation Project (HYPREP) and further ignites the hopes of
                the people,’ noting that the provision of water is one of the
                recommendations in the United Nations Environment Program (UNEP)
                Report. <br />
                The Minister commended President Muhammadu Buhari on ‘walking
                the talk’ in the implementation of the Clean-up project and for
                demonstrating his commitment by approving funds for the
                provision of potable water to impacted communities in Ogoniland.
                He announced that the Phase 1 of the water project will cover
                the following communities: Bori/kpean; Barako/B-Dere/K-Dere;
                Terabor; Korokoro/Nonwa; Alesa; and Ebubu/Nsisioken/ Ogale. The
                Honourable Minister disclosed that additional eight water
                projects will soon be rolled out. <br /> He acknowledged the
                support of the Rivers State government for granting HYPREP the
                permission to rehabilitate some of its water facilities for the
                provision of potable water in Ogoniland. The Rivers State
                government through the Ministry of Water Resources and Rural
                Development and HYPREP had signed a Memorandum of Understanding
                in February, 2021 for the rehabilitation of some moribund State
                Government water facilities in the communities. While commending
                the people of Ogoniland on their patience, he assured that ‘the
                contractors handling the project are competent and will deliver
                water that meets World Health Organization standards’. He
                stressed that the water projects will provide another
                opportunity for job creation and also increase the economic
                activities in the communities. <br />
                The Minister conveyed the President’s goodwill message, urging
                the contractors to construct water facilities in Ogoniland that
                conform to international standards. Meanwhile, the Hon. Minister
                at the event also launched the roll out of the Needs Assessment
                forms for HYPREP’s livelihood programme. The Minister noted that
                the measure is in furtherance to the renewed efforts towards
                improving livelihoods in Ogoniland. He explained that Needs
                Assessment will enable the project identify skill areas for
                training of 5000 youths and women in Ogoniland. He added that
                this will complement the efforts of Government in job creation.
              </p>
            </div>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center">
            <div className="sm:h-[663px] h-[331px] w-full flex flex-row-reverse items-center justify-center sm:gap-[35px] gap-[17px]">
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
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <p className="text-left mb-10">
              Dr. Abubakar mentioned that remediation work has been completed in
              16 out of the 21 sites in the Phase 1 Batch 1 contracts, while 6
              have been certified by NOSDRA and closed out. “The Phase 1, Batch
              2 of 36 lots have advanced at different stages of completion”, he
              added. He recalled successes recorded in the area of livelihood to
              include the training of 400 women in agro-allied skills and the
              partnership with Stakeholder Democracy Network (SDN) and
              International Institute for Tropical Agriculture (IITA) for the
              training of 15 Ogoni youths in cassava processing machines. <br />
              In his remarks, the Head of Operations/ Officer overseeing the
              Project Coordination Officer (PCO) Prof. Philip Shekwolo stated
              that the water project is a special one and assured that efforts
              will be put in place to ensure its successful implementation. He
              commended the Hon. Minister for Environment for ensuring the
              speedy take-off of the water scheme, stating that the project is
              dear to the President and solicited the continuous cooperation of
              the Ogoni people.
            </p>
            <p className="text-black font-semibold">
              TRADITIONAL RULERS OF OGONI LAND
            </p>
            <p>
              Earlier, goodwill messages were given by the Chairman of HYPREP
              Board of Trustees (BoT), Dr Mike Nwielaghi, some members of the
              HYPREP Governing Council (GC), representatives of SPDC/JV
              partners, Stakeholder Democracy Network (SDN), representative of
              the Commissioner for Water Resources and Rural Development, Rivers
              State, HRM King G.N.K. Gininwa, President Supreme Council of Ogoni
              traditional rulers, and the Chairman of Khana Local Government
              Council, Barr. Lahteh Loolo, Elected Ogoni representatives and
              Traditional rulers of the benefitting communities were also
              present at the event. <br />
              High points of the event were a courtesy call on the King of
              Ken-Khana, HRH Barile Y. Deedom, presentation of a portrait to the
              Hon. Minister by the publishers of Ogoni Agenda Magazine and the
              signing of award documents by the Hon Minister for Environment and
              the contractors.
            </p>
            <p className="text-black font-semibold">Isa Wasa</p>
            <p className="text-black font-semibold">
              Head (Communications and Community Engagement)
            </p>
            <p>24th March 2021</p>
          </section>
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-backgroundPrimary flex flex-col items-center justify-center">
            <div className="text-center mb-20">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                portable water reports
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                MONTHLY REPORT OF <br />
                PORTABLE WATER ACTIVITIES
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <CardTwo
                heading="Monthly Report"
                paragraph="In our effort to providing potable water in Ogoni land our contractors have continued to show
                commitment to..."
                report="http://hyprep.gov.ng/wp-content/uploads/2022/05/POTABLE-WATER-REPORT-FOR-APRIL-2022.pdf"
              />
              <CardTwo
                heading="Monthly Report"
                paragraph="In our effort to providing potable water in Ogoni land our contractors have continued to show commitment to..."
                report="https://hyprep.gov.ng/wp-content/uploads/2022/04/POTABLE-WATER-REPORT-FOR-MARCH-2022.pdf"
              />
              <CardTwo
                heading="Monthly Report"
                paragraph="In our effort to providing potable water in Ogoni land our contractors have continued to show commitment to..."
                report="http://hyprep.gov.ng/wp-content/uploads/2022/04/POTABLE-WATER-REPORT-FEBRUARY-2022.pdf"
              />
            </div>
            <div className="w-full mt-4 flex flex-row justify-center ">
              <button className="px-12 py-5 bg-green-700 font-bold text-base text-white font-merriweather rounded-lg hover:ease-in-out hover:scale-105 duration-300">
                See all Reports
              </button>
            </div>
          </section>
        </div>
      </MainLayout>
    </Fragment>
  );
};

export default PortableWater;
