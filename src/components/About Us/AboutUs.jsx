import React from "react";
import image from "../../images/about.jpeg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="about_content">
        <div className="about_info">
          <h2>من نحن ؟</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            labore necessitatibus praesentium cupiditate accusamus itaque
            expedita nemo vero nostrum at!
          </h4>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
