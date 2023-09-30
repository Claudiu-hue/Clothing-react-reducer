import React from "react";
import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import ProductCategoryPreview from "../product-category/product-categoryPreview.component";
import Category from "../category/category.component";

const extractValues = (obj, number) => {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      result[key] = obj[key].slice(0, number);
    }
  }

  return result;
};

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductCategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
