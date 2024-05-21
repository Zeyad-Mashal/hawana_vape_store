import React from "react";
import Hero from "../Hero/Hero";
import AboutUs from "../About Us/AboutUs";
import Banner1 from "../Banner1/Banner1";
import InfoData from "../Info/InfoData";
import Show from "../ShowRoom/Show";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.png";
import "./Home.css";
const Home = () => {
  const closePopup = () => {
    document.querySelector(".warrnig_popup").remove();
    document.body.style.overflow = "auto";
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
      <div className="warrnig_popup">
        <div className="popup_content">
          <img src={logo} alt="hwana logo" />
          <h2>تحذير !!</h2>
          <h3>السن القانوني</h3>
          <p>هوانا يقدم خدمة لمن هم فوق السن القانوني</p>
          <p>هل يزيد عمرك عن +21 ؟</p>
          <button onClick={closePopup}>نعم</button>
          <button>
            <a href="https://google.com">لا</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
