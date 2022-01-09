import React from "react";
import { headerItems, products } from "../utils/ProductsData";

const Menubar = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex text-white bg-gray-900 w-[90%] m-auto">
        {headerItems &&
          headerItems.map((item, index) => (
            <p className="m-2 text-sm hover:border border-gray-900 hover:cursor-pointer hover:border-white border p-1">
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Menubar;
