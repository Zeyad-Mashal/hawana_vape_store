import React from "react";
import image from "../../images/about.jpeg";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t, i18n] = useTranslation("globel");
  return (
    <section className="about" id="about">
      <div className="about_content">
        <div className="about_info">
          <h4>{t("aboutsection")}</h4>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
