import React, { useState, useEffect } from "react";
import "./Show.css";
import img1 from "../../images/p1.jpeg";
import img2 from "../../images/p2.jpeg";
import img3 from "../../images/p3.jpeg";
import img4 from "../../images/p4.jpeg";
import img5 from "../../images/p5.jpeg";
import img6 from "../../images/p6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import getImages from "../../Api/getImages.api";
const Show = () => {
  useEffect(() => {
    getAllImagesApi();
  });
  const [allImages, setAllImages] = useState([]);
  // let data = [
  //   {
  //     id: 1,
  //     imgSrc: img1,
  //   },
  //   {
  //     id: 2,
  //     imgSrc: img2,
  //   },
  //   {
  //     id: 3,
  //     imgSrc: img3,
  //   },
  //   {
  //     id: 4,
  //     imgSrc: img4,
  //   },
  //   {
  //     id: 5,
  //     imgSrc: img5,
  //   },
  //   {
  //     id: 6,
  //     imgSrc: img6,
  //   },
  // ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  const getAllImagesApi = () => {
    getImages(setAllImages);
  };
  return (
    <section className="show_images" id="gallary">
      <div className="show_images_container">
        <h2>معرض منتجاتنا</h2>
        <div
          className={model ? " model open" : "model"}
          onClick={() => setModel(false)}
        >
          <img src={tempImgSrc} alt="image gallary hawana" />
          <FontAwesomeIcon icon={faXmark} onClick={(e) => setModel(false)} />
        </div>
        <div className="gallary">
          {allImages.map((item) => {
            return (
              <div
                className="pics"
                key={item._id}
                onClick={() => getImg(item.picURL)}
              >
                <img src={item.picURL} alt="hawana_gallary" className="w-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Show;
