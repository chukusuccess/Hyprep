import React from "react";
import FooterComp from "../components/footer/FooterComp";
import HeaderComp from "../components/header/HeaderComp";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full min-h-[100vh]">
      <HeaderComp />
      {children}
      <FooterComp />
    </section>
  );
};

export default MainLayout;
