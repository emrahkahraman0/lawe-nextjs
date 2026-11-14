import AboutInfo from "@/templates/AboutInfo";
import AboutWe from "@/templates/AboutWe";
import Brands from "@/templates/Brands";
import HomeClients from "@/templates/HomeClients";
import HomeCounters from "@/templates/HomeCounters";
import React from "react";

function About() {
  return (
    <>
      <div>About</div>
      <AboutInfo />
      <HomeCounters />
      <AboutWe />
      <HomeClients />
      <Brands />
    </>
  );
}

export default About;
