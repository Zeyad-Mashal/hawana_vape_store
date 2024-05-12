import React, { useState, useEffect } from "react";
import "./Show.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import getAllProducts from "../../Api/getAllProducts.api";
import getAllCategory from "../../Api/getAllCategory.api";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import image from "../../images/caliburng2.webp";

const Show = () => {
  useEffect(() => {
    getProductsApi();
    getAllCategoryApi();
  }, []);
  const [allIProducts, setAllProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const getLang = localStorage.getItem("language");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  const [t] = useTranslation("globel");
  const getProductsApi = () => {
    getAllProducts(setAllProducts, setProductsLoading);
  };
  const getAllCategoryApi = () => {
    getAllCategory(setAllCategory);
  };
  return (
    <section className="show_images" id="gallary">
      <div className="show_images_container">
        <h2>{t("gallary")}</h2>
        {/* <div className="sections">
          {allCategory.map((item) => {
            return (
              <Link to={`/vape/${item._id}`}>
                <button>
                  {getLang == "en"
                    ? item.categoryName_En
                    : item.categoryName_Ar}
                </button>
              </Link>
            );
          })}
        </div> */}
        <div
          className={model ? " model open" : "model"}
          onClick={() => setModel(false)}
        >
          <img src={tempImgSrc} alt="image gallary hawana" />
          <FontAwesomeIcon icon={faXmark} onClick={(e) => setModel(false)} />
        </div>
        <div className="gallary">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              650: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="pics" onClick={() => getImg(image)}>
                <img src={image} alt="hawana_gallary" className="w-100" />
                <div className="pics_content">
                  <h3>Category Name</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pics" onClick={() => getImg(image)}>
                <img src={image} alt="hawana_gallary" className="w-100" />
                <div className="pics_content">
                  <h3>Category Name</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pics" onClick={() => getImg(image)}>
                <img src={image} alt="hawana_gallary" className="w-100" />
                <div className="pics_content">
                  <h3>Category Name</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pics" onClick={() => getImg(image)}>
                <img src={image} alt="hawana_gallary" className="w-100" />
                <div className="pics_content">
                  <h3>Category Name</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Show;
