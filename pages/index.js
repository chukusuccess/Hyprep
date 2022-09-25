import React, { Fragment } from "react";
import HeroComp from "../components/hero/HeroComp";
import BreakingNewsComp from "../components/news/BreakingNewsComp";
import NewsGalleryComp from "../components/news/NewsGalleryComp";
import MainLayout from "../layout/MainLayout";

const index = () => {
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
          <NewsGalleryComp />
        </section>
      </MainLayout>
    </Fragment>
  );
};

export default index;
