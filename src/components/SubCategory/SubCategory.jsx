import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SubCategory.css";
import image from "../../images/caliburng2.webp";
import getSubCategory from "../../Api/getSubCategory";
const SubCategory = () => {
  useEffect(() => {
    getAllSubCategory();
  }, []);
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [subCategoryLoading, setSubCategoryLoading] = useState(true);
  const [subcategoryError, setSubcategoryError] = useState("");
  const { categoryID } = useParams();
  const getLang = localStorage.getItem("language");

  const getAllSubCategory = () => {
    getSubCategory(
      setAllSubCategory,
      categoryID,
      setSubCategoryLoading,
      setSubcategoryError
    );
  };
  return (
    <section className="subcategory">
      <div className="subcategory_container">
        <div className="subcategory_list">
          {subCategoryLoading ? (
            <span class="loader"></span>
          ) : (
            allSubCategory?.map((item) => {
              return (
                <Link to={`/vape/${item._id}`}>
                  <div className="subcategory_item">
                    <img src={item.subCategoryPic} alt="sub category image" />
                    <h4>
                      {getLang == "ar"
                        ? item.subCategory_Ar
                        : item.subCategory_En}
                    </h4>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
