import React, { Fragment } from "react";
import { CardOne } from "../../components/Card-one";
import { CardTwo } from "../../components/Card-two";
import MainLayout from "../../layout/MainLayout";

const LivelihoodProgramme = () => {
  return (
    <Fragment>
      <MainLayout>
        <div className="w-full pt-12">
          <section className="sm:py-20 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center text-white">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
                hyprep projects
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                LIVELIHOOD PROGRAMME
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Neque, volutpat vestibulum arcu quis eu quisque congue.{" "}
              </p>
            </div>
          </section>
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center">
            <div className="sm:h-[663px] h-[331px] w-full flex flex-row sm:gap-[35px] gap-[17px]">
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
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col text-black">
            <div className="text-left">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                LIVELIHOOD
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vitae proin interdum vivamus venenatis eu. Netus nisl magna
                volutpat volutpat est, arcu ultricies eu. Tempus sagittis,
                varius vel volutpat integer consequat. Ultrices elit feugiat
                amet porttitor sed enim nisl eget lorem. Tincidunt lorem ante
                sed hendrerit. Sagittis leo turpis porttitor facilisis euismod.
                Varius maecenas purus magna nisi, risus, sem mauris tempor.
                Pellentesque ut tempus morbi urna vel nisi, non. Tellus vitae
                aliquet blandit eget ut aenean eu cursus. Vestibulum vel
                scelerisque pretium, est elit, dolor libero enim, elit.
                Dignissim etiam nunc, egestas nibh orci. Faucibus id duis libero
                diam vestibulum tortor, iaculis. Aenean massa feugiat turpis non
                in nullam. Sed cursus gravida ac vel mi nibh feugiat. Sit ac
                diam velit pharetra. Vel turpis posuere velit, ac. Turpis
                volutpat etiam tincidunt malesuada risus dignissim est. Tortor
                leo nunc metus tellus mollis nisi, tortor imperdiet eu.
                Sollicitudin lorem elit eget pharetra sit at neque tortor
                libero. Venenatis, consectetur rhoncus praesent amet quam.
                Ultrices vitae risus, ullamcorper dolor tellus magna massa
                varius rhoncus. Vestibulum gravida tempus odio purus tortor
                scelerisque adipiscing non. Venenatis, massa id tempus,
                fermentum, ut. Aliquam nulla convallis tellus velit rhoncus
                morbi massa. Nec interdum maecenas lectus fermentum semper a
                nunc bibendum. Aenean neque egestas et egestas sit tempus. Massa
                nisi, rhoncus in non commodo consectetur etiam nulla maecenas.
                Vitae ornare massa gravida et sit sit arcu duis. Luctus sed amet
                sit sed nisl. Odio nam amet, sagittis, sed sapien, lorem sit.
                Porta ac varius augue gravida neque. Vestibulum, scelerisque
                nunc, hac massa, porttitor aliquam pellentesque amet. Ornare
                nulla fermentum, viverra sit erat accumsan arcu. Viverra cursus
                velit, euismod justo, eu nulla. Cras nunc duis cursus non vitae
                mattis dictumst porttitor nulla. Dolor commodo sed venenatis sit
                neque nisl odio vestibulum amet. Cras lobortis purus egestas
                tortor purus laoreet sed scelerisque. Volutpat neque erat
                vestibulum lectus tincidunt est justo. Libero at in morbi tellus
                convallis. Tincidunt non at ultricies luctus pharetra. Cras
                malesuada enim, risus eu. Tristique ut purus sodales amet.
                Sodales fermentum ultricies dictumst nunc aliquam imperdiet
                venenatis tempor, lectus. Ac pretium, praesent suspendisse sit
                orci nullam tortor nulla. Quis arcu est facilisis ut sed felis.
                Ac dictum auctor tristique leo sapien commodo. Quis amet
                scelerisque leo, sed urna ullamcorper velit cursus. In eget
                porttitor donec vitae, ullamcorper pellentesque morbi feugiat
                faucibus. Sit viverra vitae tellus nunc commodo, lectus.
              </p>
            </div>
          </section>
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-backgroundPrimary flex flex-col items-center">
            <div className="text-center mb-20">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                testimonials
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <CardOne
                heading="Belema George"
                subheading="Product Designer, TRONIX LABS"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. Netus nisl magna volutpat volutpat est, arcu ultricies eu. "
              />
              <CardOne
                heading="Belema George"
                subheading="Product Designer, TRONIX LABS"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. Netus nisl magna volutpat volutpat est, arcu ultricies eu. "
              />
              <CardOne
                heading="Belema George"
                subheading="Product Designer, TRONIX LABS"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. Netus nisl magna volutpat volutpat est, arcu ultricies eu. "
              />
            </div>
          </section>
          <section className="sm:py-20 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center">
            <div className="text-center mb-20">
              <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
                Electricity reports
              </h3>
              <h2 className="text-3xl font-merriweather font-bold pb-6">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
              <CardTwo
                heading="Monthly Report"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu."
              />
              <CardTwo
                heading="Monthly Report"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu. "
              />
              <CardTwo
                heading="Monthly Report"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae proin interdum vivamus venenatis eu.  "
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
