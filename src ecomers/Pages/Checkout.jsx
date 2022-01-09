import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../Component/CheckoutProduct";

const Checkout = () => {
  let navigate = useNavigate();
  let data = useSelector(state => state.data.user);
  console.log(data);
  useEffect(() => {
    data === true ? navigate("/checkout") : navigate("/sigin");
    return () => {
      console.log("ok");
    };
  }, [data]);

  const { basket, user } = useSelector(state => state.data);

  return (
    <div className="flex p-[20px] bg-white">
      <div className=" w-[100%] mt-[10px]">
        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="mr-[10px] p-[10px] border-1 border-gray-400">
            {basket.length === 0
              ? "Your Shopping Basket is Empty"
              : "Your Shopping Basket"}
            {basket.length === 0 ? (
              <Link
                to="/"
                className="cursor-pointer border-orange bg-amber-400 flex items-center px-2 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm w-[13%]"
              >
                Continue Shopping
              </Link>
            ) : (
              ""
            )}
          </h2>
          {basket &&
            basket.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className="checkout-right"></div>
    </div>
  );
};

export default Checkout;
