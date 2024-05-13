import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnapchat,
  faFacebookF,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("globel");

  return (
    <footer className="footer">
      <div className="footer_container">
        <h2>HAWANA Vape</h2>
        <div className="social">
          <FontAwesomeIcon icon={faSnapchat} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="footer_content">
          <div className="footer_content_info">
            <h3>{t("footerTime")}</h3>
            <p>{t("days")}</p>
            <p>{t("hours")}</p>
          </div>
          <div className="footer_content_map">
            <iframe
              width="400"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.777112566103!2d55.33935749999999!3d25.2444311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0c1a67a9dd%3A0xf132316c89d6a648!2zNjhWUStRUEggLSDYp9mE2YLYsdmH2YjYr-KAjiAtINiv2KjZiiAtINin2YTYpdmF2KfYsdin2Kog2KfZhNi52LHYqNmK2Kkg2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2seg!4v1715517085304!5m2!1sar!2seg"
              className="map"
              style={{ border: "0", borderRadius: "1rem" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="copyright">{t("copyright")}&copy;</div>
      </div>
    </footer>
  );
};

export default Footer;
