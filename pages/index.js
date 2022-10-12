import React, { Fragment } from "react";
import HeroComp from "../components/hero/HeroComp";
import BreakingNewsComp from "../components/news/BreakingNewsComp";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import { ProjectCard } from "../components/news/ProjectCard";
import {
  CenterOfExcellenceIcon,
  CottageHospitalIcon,
  ElectricityProjectIcon,
  LivelyhoodProjectIcon,
  PortableWaterProjectIcon,
  PublicHealthProjectIcon,
  RemediationProjectIcon,
  SchorlarshipProjectIcon,
  SpecialistHospitalIcon,
} from "../components/news/ProjectIcons";

import tr from "../public/images/topright.png";
import tl from "../public/images/topleft.png";
import bl from "../public/images/bottomleft.png";
import br from "../public/images/bottomright.png";
import es from "../public/images/es.png";
import df from "../public/images/df.png";
import bg from "../public/images/newsletter.png";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_NEWS } from "../graphql/queries";

const index = ({ posts }) => {
  return (
    <Fragment>
      <MainLayout>
        <section className="min-h-[80vh] flex items-center justify-center hero">
          <HeroComp />
        </section>
        <section className="bg-backgroundDark max-h-[20vh] sm:min-h-[20vh]">
          <BreakingNewsComp />
        </section>
        <section>
          <div className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center">
            <div className="text-center">
              <h3 className="uppercase text-base mb-5 text-textPrimary font-semibold">
                hyprep news
              </h3>
              <h2 className="text-3xl sm:text-4xl font-poppins font-semibold pb-6">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </h2>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
                <div
                  className="bg-noContent sm:h-[340px] sm:w-[718px] flex flex-col items-start justify-center w-full h-[50vw] p-5 rounded-2xl"
                  style={{
                    background: `url(${posts[0]?.attributes?.Image?.data[0]?.attributes?.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 className="uppercase text-gray-300 font-light sm:mb-4 mb-2 sm:p-3 p-2 bg-backgroundDark rounded-[100px] opacity-70">
                    {posts[0]?.attributes?.Status}
                  </h5>
                  <p className="sm:text-xl text-lg font-merriweather text-white sm:pb-6 pb-3">
                    {posts[0]?.attributes?.Title}
                  </p>
                  <Link href={`/news/${posts[0]?.attributes?.urlSlug}`}>
                    <a className="text-green-400 font-bold text-lg underline cursor-pointer">
                      read more
                    </a>
                  </Link>
                </div>
                <div
                  className="bg-noContent sm:h-[340px] sm:w-[415px] flex flex-col items-start justify-center w-full h-[50vw] p-5 rounded-2xl"
                  style={{
                    background: `url(${posts[1]?.attributes?.Image?.data[1]?.attributes?.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 className="uppercase text-gray-300 font-light sm:mb-4 mb-2 sm:p-3 p-2 bg-backgroundDark rounded-[100px] opacity-70">
                    {posts[1]?.attributes?.Status}
                  </h5>
                  <p className="sm:text-xl text-lg font-merriweather text-white sm:pb-6 pb-3">
                    {posts[1]?.attributes?.Title}
                  </p>
                  <Link href={`/news/${posts[1]?.attributes?.urlSlug}`}>
                    <a className="text-green-400 font-bold text-lg underline cursor-pointer">
                      read more
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
                <div
                  className="border border-solid bg-noContent sm:h-[340px] sm:w-[415px] flex flex-col items-start justify-center w-full h-[50vw] p-5 rounded-2xl"
                  style={{
                    background: `url(${posts[2]?.attributes?.Image?.data[2]?.attributes?.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 className="uppercase text-gray-300 font-light sm:mb-4 mb-2 sm:p-3 p-2 bg-backgroundDark rounded-[100px] opacity-70">
                    {posts[2]?.attributes?.Status}
                  </h5>
                  <p className="sm:text-xl text-lg font-merriweather text-white sm:pb-6 pb-3">
                    {posts[2]?.attributes?.Title}
                  </p>
                  <Link href={`/news/${posts[2]?.attributes?.urlSlug}`}>
                    <a className="text-green-400 font-bold text-lg underline cursor-pointer">
                      read more
                    </a>
                  </Link>
                </div>
                <div
                  className="border border-solid bg-noContent sm:h-[340px] sm:w-[718px] flex flex-col items-start justify-center w-full h-[50vw] p-5 rounded-2xl"
                  style={{
                    background: `url(${posts[3]?.attributes?.Image?.data[3]?.attributes?.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 className="uppercase text-gray-300 font-light sm:mb-4 mb-2 sm:p-3 p-2 bg-backgroundDark rounded-[100px] opacity-70">
                    {posts[3]?.attributes?.Status}
                  </h5>
                  <p className="sm:text-xl text-lg font-merriweather text-white sm:pb-6 pb-3">
                    {posts[3]?.attributes?.Title}
                  </p>
                  <Link href={`/news/${posts[3]?.attributes?.urlSlug}`}>
                    <a className="text-green-400 font-bold text-lg underline cursor-pointer">
                      read more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ABOUT HYPREP START */}
          <section className="bg-backgroundPrimary w-full sm:py-14 flex sm:flex-row justify-center items-center flex-col py-10 px-[30px] gap-6">
            <div className="text-left sm:h-[450px] sm:w-[520px]">
              <h3 className="uppercase text-base mb-5 text-textPrimary font-semibold">
                about hyprep
              </h3>
              <h2 className="text-4xl font-merriweather font-bold pb-4">
                Restoring Environmental Sustainability, Livelihoods, Security
                and Governance in Ogoni Land.
              </h2>
              <p className="pb-10 text-left">
                HYPREP was established Under the Federal Ministry to deal with
                issues regarding environmental pollution of soil and groundwater
                by implementing the UNEP report. Also HYPREP is restoring
                Sustainable livelihoods, Security and Governance in Ogoniland.
              </p>
              <button className="px-8 py-4 rounded-lg bg-green-700 text-white">
                Learn More
              </button>
            </div>
            <div
              className="rounded-2xl bg-noContent w-full h-[100vw] mb-10 sm:h-[433px] sm:w-[509px] "
              style={{
                background: `url(${es.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </section>
          {/* ABOUT HYPREP END */}
          {/* HYPREP PROJECTS START */}
          <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="uppercase text-base mb-5 text-textPrimary font-semibold">
                hyprep projects
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <ProjectCard
                icon={<LivelyhoodProjectIcon />}
                route="/hyprep-projects/livelihoodProgramme"
                heading="Livelihood Program"
                paragraph="The Livelihood program is a skills, certification and job placement program that builds capacity in youth and women and empowers them to restart their lives 
"
              />
              <ProjectCard
                icon={<RemediationProjectIcon />}
                route="/hyprep-projects/remediation"
                heading="Remediation"
                paragraph="Soil and Water pollution is a primary issue HYPREP is tackling in Ogoniland following the guidance of UNEP 
"
              />
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <ProjectCard
                icon={<PortableWaterProjectIcon />}
                route="/hyprep-projects/portableWater"
                heading="Portable Water"
                paragraph="Bringing Portable pipe borne water to communities in the 3 LGAs who are most affected by the Water Pollution

"
              />
              <ProjectCard
                icon={<PublicHealthProjectIcon />}
                route="/hyprep-projects/publicHealth"
                heading="Public Health"
                paragraph="HPREP brings health services to the most vulnerable demographics including Pregnant women, children and the elderly
 
"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Other Initiatives
              </h2>
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
                <div className="flex flex-col gap-5 items-start justify-start">
                  <Link href="/hyprep-projects/electricityProject">
                    <a>
                      <div className="flex flex-row gap-5 items-center font-semibold sm:text-2xl hover:text-green-600 hover:cursor-pointer justify-center">
                        <ElectricityProjectIcon />
                        <h1>Ogoni Electricity Project</h1>
                      </div>
                    </a>
                  </Link>
                  <div className="flex flex-row gap-5 items-center font-semibold sm:text-2xl hover:text-green-600 hover:cursor-pointer justify-center">
                    <CenterOfExcellenceIcon />
                    <h1>Center of Excellence Project</h1>
                  </div>
                  <div className="flex flex-row gap-5 items-center font-semibold sm:text-2xl hover:text-green-600 hover:cursor-pointer justify-center">
                    <CottageHospitalIcon />
                    <h1>Cottage Hospital</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start">
                  <Link href="/hyprep-projects/electricityProject">
                    <a>
                      <div className="flex flex-row gap-5 items-center font-semibold sm:text-2xl hover:text-green-600 hover:cursor-pointer justify-center">
                        <SchorlarshipProjectIcon />
                        <h1>Educational Support Project</h1>
                      </div>
                    </a>
                  </Link>
                  <div className="flex flex-row gap-5 items-center font-semibold sm:text-2xl hover:text-green-600 hover:cursor-pointer justify-center">
                    <SpecialistHospitalIcon />
                    <h1>Specialist hospital</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* HYPREP PROJECTS END */}
          {/* HYPREP PROJECT COORDINATOR START */}
          <section className="bg-backgroundPrimary sm:py-20 sm:px-[140px] justify-center items-center pb-10 py-10 px-[30px] w-full sm:h-[524px] flex sm:flex-row-reverse gap-6 flex-col-reverse">
            <div className="text-left sm:h-[450px] sm:w-[520px]">
              <h3 className="uppercase text-base mb-6 text-textPrimary font-semibold">
                PROJECT CORDINATOR
              </h3>
              <p className="pb-6 text-left">
                As the World commemorates the Environment. We at HYPREP join in
                the celebration to promote the consciousness of man’s
                custodianship of the Earth. This was, and remains God’s mandate
                to man. Today we mark the theme: ‘Only One Earth’, which brings
                into a sharp relief the fact that mankind has no where else to
                go. This is our only home and we have to make it continuously,
                liveable! HYPREP in carrying out her mandate is poised towards
                making Ogoni liveable, through the removal of contaminants of
                concern from several impacted sites which dot the landscape.
              </p>
              <h2 className="text-3xl font-merriweather font-semibold pb-2">
                Dr. Ferdinand Giadom Project Coordination, HYPREP
              </h2>
              <button className="px-8 py-4 rounded-lg bg-green-700 text-white">
                Learn More
              </button>
            </div>
            <div
              className="hidden sm:flex rounded-2xl bg-noContent sm:h-[433px] sm:w-[509px]"
              style={{
                background: `url(${df.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="sm:hidden w-full flex flex-row items-start justify-start">
              <div
                className="rounded-2xl bg-noContent w-[50%] h-[50vw]"
                style={{
                  background: `url(${df.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </section>
          {/* HYPREP PROJECT COORDINATOR END */}
          {/* NEWSLETTER SECTION START */}
          <section className="pb-10 py-10 px-[30px] w-full flex flex-row justify-center items-center">
            <div
              className="sm:w-[1160px] w-full bg-gradient-to-r from-[#015321] to-[#00A336] sm:h-[473px] h-[100vw] text-white text-center sm:py-20 py-10 px-2 rounded-2xl flex flex-col sm:gap-16 gap-8 font-merriweather items-center justify-center"
              style={{
                background: `linear-gradient(to right, #000, transparent), url(${bg.src})`,
                backgroundPosition: "left",
              }}
            >
              <h3>NEWSLETTERS</h3>
              <h1 className="sm:text-4xl text-2xl font-semibold pb-2">
                Get in touch with us by subscribing to <br /> our monthly
                Newsletters
              </h1>
              <div className="sm:mb-12 mb-6 sm:w-[605px] w-[90%] flex flex-row justify-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white sm:px-8 px-2 sm:py-5 py-3 rounded-tl-lg rounded-bl-lg border-0 w-full sm:w-full "
                />
                <div className="bg-white px-2 py-2 rounded-tr-lg rounded-br-lg border-0 sm:w-[170px] w-full flex flex-col items-center justify-center ">
                  <button className="bg-green-700 sm:px-9 sm:py-3 px-5 py-2 rounded-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </MainLayout>
    </Fragment>
  );
};

export default index;

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_NEWS,
  });
  return {
    props: {
      posts: data.newsGuides.data,
    },
  };
}
