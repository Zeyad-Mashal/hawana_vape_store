import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnapchat,
  faFacebookF,
  faXTwitter,
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
          <FontAwesomeIcon icon={faXTwitter} />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927758.0370464314!2d47.4820571629815!3d24.724997748455824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1712357254144!5m2!1sar!2seg"
              width="400"
              height="300"
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
