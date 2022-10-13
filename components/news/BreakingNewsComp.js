import React from "react";

const BreakingNewsComp = () => {
  return (
    <section className="w-full flex h-[135px] sm:py-0 py-2 sm:gap-5 items-center">
      <div className="z-10 bg-backgroundDark h-[100%] px-6 py-6 sm:py-0 sm:px-20">
        <img src="/images/brkNewsImg1.png" className="news" alt="news" />
      </div>
      <div className="flex flex-row justify-start sm:gap-5 w-full overflow-x-scroll slide">
        {[1, 2].map((i) => (
          <div
            className="flex items-center justify-start break-words text-clip gap-8 sm:min-w-min min-w-[600px]"
            key={i}
          >
            <img src="/images/brkNewsImg2.png" alt="news" />
            <div className="break-words text-sm font-light text-clip text-white min-w-min">
              Nigerian Government Reiterates Commitment On Hydrocarbon Pollution
              Remediation Project
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BreakingNewsComp;
