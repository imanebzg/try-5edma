import React from "react";

const Category = ({ name }) => {
  return (
    <div className="p-2 bg-neutral-2 text-black rounded-md inline-block text-base">
      {name}
    </div>
  );
};

export default Category;
