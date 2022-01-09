import React, { useEffect } from "react";
import { products } from "../utils/ProductsData";
import Products from "./Products";
import Menubar from "./../Component/Menubar";
import Carousel from "./Carousel";
import Footer from "../Component/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let items = useSelector(state => state.data.searchItem);
  let navigate = useNavigate();
  let data = useSelector(state => state.data);

  useEffect(() => {
    data.user === true ? navigate("/") :  navigate("/sigin");
    return () => {
      console.log("ok");
    };
  }, [data]);

  return (
    <>
      <Menubar />
      <Carousel />
      <div className="mt-[-330px]  w-full h-full  bg-gray-50 ">
        <div className="p-5 flex">
          {items.slice(0, 3).map(items => (
            <Products
              key={items.id}
              id={items.id}
              title={items.title}
              price={items.price}
              rating={items.rating}
              image={items.image}
              specifications={items.specification}
              details={items.detail}
            />
          ))}
        </div>
        <div className="p-5 flex z-10 mx-[5px] flex-wrap">
          {items.slice(3, 6).map(items => (
            <Products
              key={items.id}
              id={items.id}
              title={items.title}
              price={items.price}
              rating={items.rating}
              image={items.image}
              specifications={items.specification}
              details={items.detail}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
