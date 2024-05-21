import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import image from "../../images/caliburng2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnapchat,
  faFacebookF,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import productDetails from "../../Api/productDetails";
const ProductDetails = () => {
  useEffect(() => {
    getProductDetails();
  }, []);
  const { productID } = useParams();
  const [Product, setProduct] = useState();
  const [productsLoading, setProductsLoading] = useState(true);
  const [allProductError, setAllProductError] = useState(true);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [model, setModel] = useState(false);

  const getProductDetails = () => {
    productDetails(
      setProduct,
      setProductsLoading,
      setAllProductError,
      productID
    );
  };
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  const getLang = localStorage.getItem("language");
  return (
    <section className="details">
      <div
        className={model ? " model open" : "model"}
        onClick={() => setModel(false)}
      >
        <img src={tempImgSrc} alt="image product hawana" />
        <FontAwesomeIcon icon={faXmark} onClick={(e) => setModel(false)} />
      </div>
      <div className="details_container">
        <div className="product_image" onClick={() => getImg(Product.images)}>
          <img src={Product?.images} alt="product image" />
        </div>
        <div className="product_content">
          <h3>
            {getLang == "en"
              ? Product?.translation.en.productName
              : Product?.translation.ar.productName}
          </h3>
          <div className="social_product">
            <a
              href="https://www.snapchat.com/add/hawana_east?share_id=COkm1me6ySc&locale=ar-SA-u-nu-arab"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a
              href="https://www.facebook.com/people/Hawana-East/pfbid0MmQJD4RGUvacGhqwuN7LeeUddodF6GRc3CB5jcbLm2ke85gJH7ywnA4YHfPtAT5Gl/?mibextid=ZbWKwL"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.tiktok.com/@hawana_east?_t=8mNWPoKhxgG&_r=1"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/hawana_east/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="pre_desc">
        <h4>الوصف:</h4>
        <pre>
          {getLang == "en"
            ? Product?.translation.en.description
            : Product?.translation.ar.description}
        </pre>
      </div>
    </section>
  );
};

export default ProductDetails;
