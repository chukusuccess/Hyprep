import React, { Fragment } from "react";
import MainLayout from "../../layout/MainLayout";
import { AboutCard } from "../../components/AboutCard";

const GoverningCouncil = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section className="sm:py-20 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white">
            <div className="text-center">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                about hyprep
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                GOVERNING COUNCIL
              </h2>
            </div>
          </section>
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                GOVERNING COUNCIL
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vitae proin interdum vivamus venenatis eu. Netus nisl magna
                volutpat volutpat est, arcu ultricies eu. Tempus sagittis,
                varius vel volutpat integer consequat. Ultrices elit feugiat
                amet porttitor sed enim nisl eget lorem. Tincidunt lorem ante
                sed hendrerit. Sagittis leo turpis porttitor facilisis euismod.
              </p>
            </div>
          </section>
          <section className="sm:py-4 sm:px-[140px] py-4 px-[30px] pb-20 sm:pb-20 items-center w-full bg-white flex flex-col">
            <div className="sm:w-[1155px] sm:h-[572px] w-full h-[50vw] bg-noContent rounded-2xl "></div>
          </section>
          <section className="bg-white w-full sm:h-[724px] flex sm:flex-row-reverse flex-col-reverse items-center justify-center gap-12 sm:p-[137px] p-[30px] pt-12">
            <div className="text-left sm:h-[450px] sm:w-[520px]">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                THE MINISTER OF ENVIRONMENT
              </h3>
              <h2 className="text-4xl font-merriweather font-bold pb-4">
                Mohammed H. Abdullahi
              </h2>
              <p className="pb-10 text-left">
                Mohammed H. Abdullahi was born on 21st April, 1968 at Uke in
                Karu Local Government Area of Nasarawa State. He had his primary
                education at Uke Central Primary School and Government Secondary
                School Uke from 1974-1979 and 1979-1984 respectively. He
                graduated from Usman Danfodio University Sokoto with a combined
                Honours Degree in Law and was eventually called to the Nigerian
                Bar in 1991.
              </p>
            </div>
            <div className="hidden sm:flex rounded-2xl bg-noContent sm:h-[433px] sm:w-[509px]"></div>
            <div className="sm:hidden w-full flex flex-row items-start justify-start">
              <div className="rounded-2xl bg-noContent w-[50%] h-[50vw]"></div>
            </div>
          </section>
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div>
              <p className="text-left mb-10">
                Mr. Abdullahi started his Legal Career with Messrs Ola
                Olanipekun & Co. (Prime Chambers) as an Associate Attorney (1992
                – 1994) shortly after his compulsory National Youth Service
                Corps Scheme (NYSC) with Messrs Ukpabi, Ukpabi & Co. (Legal
                Practitioners) in Enugu from 1991-1992. Mr. Abdullahi’s career
                span almost three decades in both the Private and Public Sectors
                which includes being a founding partner in the law firm of
                Messrs Hammart & Co. (Tafida Chambers) from 1994 to date,
                Chairman – Karu Local Government Council (Nasarawa State) in
                1996, Deputy General Manager/Company Secretary Nasarawa
                Investment & Property Development Company, Lafia – 2000-2002;
                Attorney General/Commissioner for Justice, Nasarawa State
                (2003-2005), Group Company Secretary/Legal Adviser,
                Transnational Corporation of Nigeria Plc (Transcorp) from 2006 –
                2008, Vice President/Executive (Administration & Regulatory,
                Intercell Tech Limited, 2008 -2011. Mr Abdullahi was
                re-appointed Attorney General/Commissioner for Justice –
                Nasarawa State, 2011- 2013 and later became Special Adviser on
                Special Duties where he superintended the Nasarawa State
                Government 30 Billion Bond Issuance Programme (1st Tranche) and
                also supervised the Investment portfolio of the State, he also
                served as the Secretary to the State Government (SSG) of
                Nasarawa State from 2017 – 2019. Until his appointment as Hon
                Minister by President Muhammadu Buhari, he was the minister of
                state for Federal Ministry of Science, Technology and
                Innovation. He is a member of both the Nigerian (NBA) and
                International Bar Association (IBA).​
              </p>
            </div>
          </section>
          <section className="flex flex-grow flex-col w-full bg-white sm:py-20 sm:px-[140px] py-10 px-[30px] items-center justify-center">
            <div>
              <div className="text-left w-full">
                <h2 className="text-3xl font-merriweather font-bold pb-6">
                  Composition of the Governing
                  <br /> Council
                </h2>
                <p className="text-left pb-6">
                  The Governing Council consists of:
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
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
            <div className="text-left">
              <h2 className="text-3xl font-merriweather font-bold pb-6">
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

export default GoverningCouncil;
