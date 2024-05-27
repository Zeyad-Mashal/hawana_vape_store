import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import AboutUs from "../About Us/AboutUs";
import Banner1 from "../Banner1/Banner1";
import InfoData from "../Info/InfoData";
import Show from "../ShowRoom/Show";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.png";
import "./Home.css";
import { useTranslation } from "react-i18next";
const Home = () => {
  useEffect(() => {
    handleWarning();
  });
  const getLang = localStorage.getItem("language");
  const closePopup = () => {
    document.querySelector(".warrnig_popup").remove();
    document.body.style.overflow = "auto";
  };
  const [t] = useTranslation("globel");

  const handleWarning = () => {
    const isShow = localStorage.getItem("isShow");
    if (isShow == undefined) {
      document
        .querySelector(".warrnig_popup")
        .classList.replace("d-none", "d-block");
      localStorage.setItem("isShow", "true");
    }
  };
  return (
    <main>
      <Hero />
      <Show />
      <AboutUs />
      <Banner1 />
      <InfoData />
      <Contact />
      <Footer />
      <div className="warrnig_popup d-none">
        <div className="popup_content">
          <img src={logo} alt="hwana logo" />
          <h2>{getLang == "ar" ? "تحذير" : "Warning"} !!</h2>
          <h3>{getLang == "ar" ? "السن القانوني" : "the legal age"}</h3>
          <p>
            {getLang == "ar"
              ? "هوانا يقدم خدمة لمن هم فوق السن القانوني"
              : "Hawana provides a service to those over the legal age"}
          </p>
          <p>
            {getLang == "ar" ? "هل يزيد عمرك عن +21 ؟" : "Are you over 21+?"}
          </p>
          <button onClick={closePopup}>
            {getLang == "ar" ? "نعم" : "Yes"}
          </button>
          <button>
            <a href="https://google.com">{getLang == "ar" ? "لا" : "No"}</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
