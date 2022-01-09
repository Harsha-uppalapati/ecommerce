import React from "react";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../src/redux/Actions/actions";
const Products = ({
  id,
  title,
  price,
  image,
  rating,
  specification,
  detail,
}) => {
  const dispatch = useDispatch();

  const onAddItemToBasket = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="basis-1/3 z-[10]">
      <div
        id="product"
        className="flex items-center flex-col justify-between max-w-[380px] min-w-[100px] mx-5 my-4 p-2.5 w-full border border-white hover:border-gray-200 bg-white  shadow-md"
      >
        <div id="info" className="mb-[15px] h-[100px]">
          <Link to={`/product/${id}`}>
            <p>{title} </p>
          </Link>
          <p id="price" className="mt-[5px] flex items-center">
            <strong>
              <BiRupee />
            </strong>
            <strong>{price}</strong>
          </p>
          <div id="rating" className="flex">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>
                  <AiFillStar className="text-amber-300" />
                </p>
              ))}
          </div>
        </div>
        <img
          src={image}
          alt={title}
          className="w-full max-h-[200px] object-contain mb-[15px] mx-3 my-1 h-[200px]"
        />
        <button
          className=" cursor-pointer border-orange bg-amber-400 flex items-center px-2 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm"
          onClick={onAddItemToBasket}
        >
          <i className="align-middle">
            <AiOutlineShoppingCart />
          </i>
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default Products;
