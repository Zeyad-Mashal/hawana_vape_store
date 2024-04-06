import React from "react";
import "./InfoData.css";
import info from "../../images/about.jpg";
import InfoBanner from "../../images/banner1.jpeg";
const InfoData = () => {
  return (
    <section className="info">
      <div className="info_container">
        <div className="info_wrapper">
          <div className="info_content">
            <div className="info_image_holder">
              <img src={info} alt="hawana info" />
            </div>
            <div className="info_content_data">
              <h2>كيف بدأت الفكره ؟</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi, dolorem esse quaerat temporibus dolorum repellat
                aliquid dignissimos earum voluptate unde?
              </p>
            </div>
          </div>
        </div>
        <div className="info_content_banner">
          <img src={InfoBanner} alt="info banner" />
        </div>
        <div className="info_wrapper">
          <div className="info_content">
            <div className="info_content_data">
              <h2>متى بدات والى ماذا وصلت الان الشركه ؟</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi, dolorem esse quaerat temporibus dolorum repellat
                aliquid dignissimos earum voluptate unde?
              </p>
            </div>
            <div className="info_image_holder">
              <img src={info} alt="hawana info" />
            </div>
          </div>
        </div>
        <div className="futuer_view mt-5">
          <div className="view_content">
            <h2>الخطه المستقبليه ورؤيه الشركه</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quaerat perspiciatis repudiandae reprehenderit rem voluptas ipsum
              beatae consequatur sunt fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoData;
