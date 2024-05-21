import React, { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [t, i18n] = useTranslation("globel");
  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    window.location.reload();
  };
  const handleWebsiteLang = () => {
    const lang = localStorage.getItem("language");
    if (lang == "ar") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  handleWebsiteLang();
  return (
    <header>
      <a href="/hawana_vape_store">
        <img src={logo} alt="logo" width={120} />
      </a>
      <nav ref={navRef}>
        <a href="/#">{t("header.home")}</a>
        <a href="/#gallary">{t("header.ourproducts")}</a>
        <a href="/#about">{t("header.aboutus")}</a>
        <a href="/#info">{t("header.companyinfo")}</a>
        <a href="/#contact">{t("header.contact")}</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
          </button>
          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={() => handleLang("en")}
              >
                English
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={() => handleLang("ar")}
              >
                العربية
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default NavBar;
