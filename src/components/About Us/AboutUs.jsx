import React from "react";
import image from "../../images/c.jpg";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t] = useTranslation("globel");
  return (
    <section className="about" id="about">
      <div className="about_content">
        <div className="about_info">
          <h4>{t("aboutsection")}</h4>
        </div>
        <img src={image} alt="" />
        <span className="about_float">{t("aboutImage")}</span>
      </div>
    </section>
  );
};

export default AboutUs;
