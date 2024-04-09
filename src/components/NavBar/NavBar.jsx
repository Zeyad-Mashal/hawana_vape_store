import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import logo from "../../images/logo.png";
const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img src={logo} alt="logo" width={120} />
      <nav ref={navRef}>
        <a href="/hawana_vape_store/#">الرئيسية</a>
        <a href="/hawana_vape_store/#about">من نحن ؟</a>
        <a href="/hawana_vape_store/#info">معلومات الشركة</a>
        <a href="/hawana_vape_store/#gallary">المعرض</a>
        <a href="/hawana_vape_store/#contact">اتصل بنا</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default NavBar;
