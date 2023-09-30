import React from "react";
import { useContext } from "react";
import "./product.categoryPreview.styles.scss";
import { CategoriesContext } from "../../context/categories.context";
import ProductCategory from "../../components/product-category/product-category.component";

const extractValues = (obj, number) => {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      result[key] = obj[key].slice(0, number);
    }
  }

  return result;
};

const ProductCategoryPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const extractedValues = extractValues(categoriesMap, 4);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <ProductCategory key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default ProductCategoryPreview;
