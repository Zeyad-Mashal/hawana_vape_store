import React, { useEffect, useState } from "react";
import "./Vape.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHorseHead } from "@fortawesome/free-solid-svg-icons";
import image from "../../images/p6.jpeg";
import { useTranslation } from "react-i18next";
import getProductByCategory from "../../Api/getProductByCategory.api";
import { Link, useParams } from "react-router-dom";
const Vape = () => {
  useEffect(() => {
    getProductByCategoryApi();
  }, []);
  const [allProduct, setAllProducts] = useState([]);
  const [allProductLoading, setAllProductLoading] = useState(true);
  const [allProductError, setAllProductError] = useState("");
  const { categoryID } = useParams();
  const [t] = useTranslation("globel");
  const [model, setModel] = useState(false);
  const getLang = localStorage.getItem("language");
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");
  const getImg = (imgSrc, product) => {
    setTempImgSrc(imgSrc);
    if (getLang == "en") {
      setPName(product.en.productName);
      setPDesc(product.en.description);
    } else {
      setPName(product.ar.productName);
      setPDesc(product.ar.description);
    }

    setModel(true);
  };
  const getProductByCategoryApi = () => {
    getProductByCategory(
      setAllProducts,
      setAllProductLoading,
      setAllProductError,
      categoryID
    );
  };
  return (
    <section className="vape" id="main">
      <div className="vape_container">
        {allProductLoading ? (
          <div className="section_title_loading"></div>
        ) : (
          <h2>
            {t("productGallary")}{" "}
            <span>
              {getLang == "en"
                ? allProduct[0]?.category?.categoryName_En
                : allProduct[0]?.category?.categoryName_Ar}
            </span>
          </h2>
        )}

        <div className="vape_list">
          {allProductLoading ? (
            <span class="loader"></span>
          ) : (
            allProduct.map((item) => {
              return (
                <>
                  <div
                    className={model ? " model open" : "model"}
                    onClick={() => setModel(false)}
                  >
                    <img src={tempImgSrc} alt="image product hawana" />
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={(e) => setModel(false)}
                    />
                    <div className="model_content">
                      <h4>{pName}</h4>
                      <pre className="pre_model">{pDesc}</pre>
                    </div>
                  </div>
                  <Link to={`/productDetails/${item._id}`}>
                    <div
                      className="vape_item"
                      onClick={() => getImg(item.images, item.translation)}
                    >
                      <img src={item.images} alt="vape image" />
                      <div className="vape_item_content">
                        <h3>
                          {getLang == "en"
                            ? item.translation.en.productName
                            : item.translation.ar.productName}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Vape;
