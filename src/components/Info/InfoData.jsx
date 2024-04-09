import React from "react";
import "./InfoData.css";
import info from "../../images/how are we.jpeg";
import info2 from "../../images/our company.jpeg";
import InfoBanner from "../../images/banner3.jpeg";
const InfoData = () => {
  return (
    <section className="info" id="info">
      <div className="info_container">
        <div className="info_wrapper">
          <div className="info_content">
            <div className="info_image_holder">
              <img src={info} alt="hawana info" />
            </div>
            <div className="info_content_data">
              <h2>كيف بدأت الفكره ؟</h2>
              <p>
                بدأت مسيرتنا من صحراء الشرق الأوسط، في يوما ما في العام 2020 قرر
                المالك بناء علامة تجارية تنافس الماركات العالمية في مجالات عدة
                أبرزها مجال الفيب (بدائل الدخان)، اكسسوارات ولوازم التدخين،
                الفحم وغيرها.
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
                بدأت مسيرتنا من صحراء الشرق الأوسط، في يوما ما في العام 2020
                كانت رؤيتنا هي صنع منتجات بروح وطابع يحاكي الذوق العربي، راعينا
                في التصميم الاصالة والعراقة العربية مدموجة بلمسة من التقدم
                الفكري والفخامة.
              </p>
            </div>
            <div className="info_image_holder">
              <img src={info2} alt="hawana info" />
            </div>
          </div>
        </div>
        <div className="futuer_view mt-5">
          <div className="view_content">
            <h2>الخطة المستقبلة ورؤية الشركة</h2>
            <p>
              لدينا طاقم شغوف لديه خبرات واسعة من سنوات عدة يعملون ليل نهار لخلق
              منتجات تقترب للكمال تليق بك عزيزي المستخدم. <br />
              شعارتنا : #هوانا_يكمل_جوك_معانا , #هوانا_غير , #هوانا_عربي ,
              #هو_اختيارنا
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoData;
