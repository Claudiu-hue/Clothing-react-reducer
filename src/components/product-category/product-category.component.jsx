import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../product.card/product-card.component";
import "./product-category.styles.scss";

const ProductCategory = ({ title, products }) => {
  //category preview
  // const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <div className="category-preview-container">
        <h2>
          <Link to={title} className="title">
            {title?.toUpperCase()}
          </Link>
        </h2>
      </div>
      <div className="products-container">
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </div>
    </>
  );
};

export default ProductCategory;
