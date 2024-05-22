import React from "react";
import "./InfoData.css";
import info from "../../images/b.jpg";
import info2 from "../../images/a.jpg";
import InfoBanner from "../../images/3.jpg";
import { useTranslation } from "react-i18next";

const InfoData = () => {
  const [t] = useTranslation("globel");
  return (
    <section className="info" id="info">
      <div className="info_container">
        <div className="info_wrapper">
          <div className="info_content">
            <div className="info_image_holder">
              <img src={info} alt="hawana info" />
              <spa className="info_image_holder_img1">{t("howImage")}</spa>
            </div>
            <div className="info_content_data">
              <p>{t("infoTop")}</p>
            </div>
          </div>
        </div>
        <div className="info_content_banner">
          <img src={InfoBanner} alt="info banner" />
        </div>
        <div className="info_wrapper">
          <div className="info_content info_reverse">
            <div className="info_content_data">
              <p>{t("infoBottom")}</p>
            </div>
            <div className="info_image_holder">
              <img src={info2} alt="hawana info" />
              <span className="info_image_holder_img2">
                {t("companyImage")}
              </span>
            </div>
          </div>
        </div>
        <div className="futuer_view mt-5">
          <div className="view_content">
            <h2>{t("ourVision")}</h2>
            <p>
              {t("ourVisionDesc")} <br />
              {t("slogan")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoData;
