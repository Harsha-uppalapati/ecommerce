import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate, searchitems } from "../redux/Actions/actions";
import { products } from "../utils/ProductsData";

const Navbar = () => {
  let [state, setState] = useState(products);
  let [serchval, setSearchVal] = useState("");
  let data = useSelector(state => state.data.user);
 

  let dispatch = useDispatch();
  let handleLogout = e => {
    e.preventDefault();

    try {
      dispatch(logOutInitiate());
    } catch (error) {}
  };
  const { user, basket } = useSelector(state => state.data);
  let search = state.filter(val => {
    if (serchval === "") {
      return val;
    } else if (
      val.title.toLocaleLowerCase().includes(serchval.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  useEffect(() => {
    dispatch(searchitems(search));
  }, [serchval]);
  return (
    <section className="bg-black h-14">
      <article className="h-14 flex items-center w-[90%]  m-auto">
        <div className="basis-[20%]">
          <a href="/">
            <img src="firstbuylogo.png" alt="logo" className="h-12 w-32" />{" "}
          </a>
        </div>
        <div className="basis-[50%] flex justify-end">
          {data === true ? (
            <>
              <input
                type="search"
                placeholder="search"
                className="w-[80%] h-10 p-2 rounded-l-[2px]"
                onChange={e => setSearchVal(e.target.value)}
              />
              <p className="bg-orange-500 w-[8%] text-2xl py-2 px-3 rounded-r-[2px]">
                <GoSearch />
              </p>
            </>
          ) : (
            <h3 className="text-white flex justify-center items-center mx-36">
              welcometo firstbuy happynewyear
            </h3>
          )}
        </div>
        <div className="basis-[30%] justify-end flex text-white">
          <ul className="flex p-2 items-center font-semibold">
            {data === true ? (
              <>
                <li
                  className="px-3 hover:text-orange-500"
                  onClick={handleLogout}
                >
                  Logout
                </li>
                <li className="px-3 hover:text-orange-500">
                  <Link to="/">Orders</Link>
                </li>
                <li className="px-3 hover:text-orange-500 flex items-center">
                  <Link to="/checkout">Cart</Link>

                  <BsCart className="text-4xl relative" />

                  <span className="absolute mx-[21px] mt-[-5px] text-orange-500 hover:text-white p-6">
                    {basket && basket.length}
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="px-3 hover:text-orange-500">
                  <Link to="/sigin">Sign in</Link>
                </li>
                <li className="px-3 hover:text-orange-500">
                  <Link to="/signup">Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
