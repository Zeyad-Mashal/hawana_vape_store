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
            اصل اسم هوانا من كلمة هواء و الذي نعني به ما نستنشقه من غازات سواء
            أوكسجين او أي شيء يٌوستنشق بدافع الحياة و السعادة فهذا دلالة أيضا
            على المنتجات التي نقدمها ولها علاقة بالهواء هواء في المعجم فاعل من
            هوى أي ما تهواه انفسهم و تميل إليه .
          </h4>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
