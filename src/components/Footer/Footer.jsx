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
          <a
            href="https://www.snapchat.com/add/hawana_east?share_id=COkm1me6ySc&locale=ar-SA-u-nu-arab"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSnapchat} />
          </a>
          <a
            href="https://www.facebook.com/people/Hawana-East/pfbid0MmQJD4RGUvacGhqwuN7LeeUddodF6GRc3CB5jcbLm2ke85gJH7ywnA4YHfPtAT5Gl/?mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.tiktok.com/@hawana_east?_t=8mNWPoKhxgG&_r=1"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com/hawana_east/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
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
