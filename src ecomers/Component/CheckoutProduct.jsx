import React from "react";
import { useDispatch } from "react-redux";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { removeFromBasket } from "../redux/Actions/actions";
import { BiRupee } from "react-icons/bi";

const CheckoutProduct = ({ id, title, image, rating, price, hideButton }) => {
  let dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="flex mt-[20px] mb-[20px] border-2 border-bg-[#efefef] shadow-md">
      <div className="basis-[20%]"> 
        <img
          src={image}
          alt=""
          className=" max-h-[200px] object-contain mb-[15px]  h-[200px] m-auto"
        />
      </div>
      <div className="pl-[20px] basis-[70%]">
        <p className="text-[20px] font-semibold">{title}</p>
        <p className="checkout-product-price flex">
          <strong>
            <BiRupee className="mt-[6px]"/>
          </strong>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button
            className=" cursor-pointer border-orange bg-amber-400 flex items-center px-2 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm"
            onClick={removeItemFromBasket}
          >
            <i className="align-middle">
              <AiOutlineShoppingCart />
            </i>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
