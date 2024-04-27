import React from "react";
import Hero from "../Hero/Hero";
import AboutUs from "../About Us/AboutUs";
import Banner1 from "../Banner1/Banner1";
import InfoData from "../Info/InfoData";
import Show from "../ShowRoom/Show";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Banner1 />
      <InfoData />
      <Show />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
