import React from "react";
import banner1 from "../../images/6.jpg";
import "./Banner1.css";
const Banner1 = () => {
  return (
    <section className="banner1">
      <div className="banner1_container">
        <div className="banner1_content">
          <img src={banner1} alt="" className="image_banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner1;
