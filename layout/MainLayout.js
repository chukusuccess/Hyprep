import React from "react";
import Head from "next/head";
import FooterComp from "../components/footer/FooterComp";
import HeaderComp from "../components/header/HeaderComp";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full min-h-[100vh]">
      <Head>
        <title>HYPREP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderComp />
      {children}
      <FooterComp />
    </section>
  );
};

export default MainLayout;
