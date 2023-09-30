import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./categories-menu.styles.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
