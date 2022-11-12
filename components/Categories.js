import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-purple-500">Categories</span> we think you'll
        like.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
        {categories.map((category, index) => (
          <CategoryCard
            img={category.cover_img}
            title={category.title}
            viewers={category.viewers + "K"}
            tags={category.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
