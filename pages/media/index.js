import React from "react";
import MainLayout from "../../layout/MainLayout";

const Media = () => {
  return (
    <MainLayout>
      <div>
        <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center items-start text-white">
          <div className="text-left">
            <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
              media
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </h2>
            <p></p>
          </div>
        </section>
        <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center">
          <div className="text-center mb-5">
            <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
              images
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h2>
          </div>
          <div className="sm:h-[663px] w-full flex sm:flex-row flex-col items-center justify-center sm:gap-[35px] gap-[17px]">
            {/* this div below is for the mobile image */}
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            {/* the div below is for desktop images */}
            <div className="hidden sm:flex h-full sm:w-[479px] w-[238px] rounded-2xl bg-noContent"></div>
            <div className="hidden h-full sm:w-[646px] w-[323px] sm:flex flex-col sm:gap-10 gap-5">
              <div className="h-full w-full rounded-2xl bg-noContent"></div>
              <div className="h-full w-full rounded-2xl bg-noContent"></div>
            </div>
          </div>
        </section>
        <section className="sm:px-[140px] pb-10 px-[30px] w-full bg-white flex flex-col-reverse items-center justify-center">
          <div className="sm:h-[663px] w-full flex sm:flex-row flex-col items-center justify-center sm:gap-[35px] gap-[17px]">
            {/* this div below is for the mobile image */}
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            {/* the div below is for desktop images */}
            <div className="hidden sm:flex h-full sm:w-[479px] w-[238px] rounded-2xl bg-noContent"></div>
            <div className="hidden h-full sm:w-[646px] w-[323px] sm:flex flex-col sm:gap-10 gap-5">
              <div className="h-full w-full rounded-2xl bg-noContent"></div>
              <div className="h-full w-full rounded-2xl bg-noContent"></div>
            </div>
          </div>
        </section>
        <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-backgroundPrimary flex flex-col items-center">
          <div className="text-center mb-5">
            <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
              videos
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h2>
          </div>
          <div className="sm:w-[1155px] sm:h-[372px] w-full h-[50vw] bg-noContent rounded-2xl "></div>
        </section>
        <section className="sm:px-[140px] pb-10 px-[30px] w-full bg-backgroundPrimary flex flex-col-reverse items-center justify-center">
          <div className="sm:h-[663px] w-full flex sm:flex-row flex-col items-center justify-center sm:gap-[35px] gap-[17px]">
            {/* this div below is for the mobile videos */}
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            <div className="sm:hidden h-[100vw] sm:w-[479px] w-[100%] rounded-2xl bg-noContent"></div>
            {/* the div below is for desktop videos */}
            <div className="hidden sm:flex h-full sm:w-[479px] w-[238px] rounded-2xl bg-noContent"></div>
            <div className="hidden h-full sm:w-[646px] w-[323px] sm:flex flex-col sm:gap-10 gap-5">
              <div className="h-full w-full rounded-2xl bg-noContent"></div>
              <div className="h-full w-full rounded-2xl bg-noContent"></div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Media;
