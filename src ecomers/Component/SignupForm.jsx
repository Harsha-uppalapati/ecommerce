import React, { useEffect } from "react";
import useInput from "../Hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { registerInitiate } from "../redux/Actions/actions";
const SiginForm = () => {
  let data = useSelector(state => state.data.user);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [email, setEmail, ResetEmail] = useInput("");
  let [password, setPassword, ResetPassword] = useInput("");
  let [userName, setUserName, ResetUserName] = useInput("");
  let rawData = [email, password, userName];
  let handleSubmit = e => {
    e.preventDefault();
    console.log(email);
    ResetEmail();
    ResetPassword();
    ResetUserName();
    try {
      dispatch(registerInitiate(rawData));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data === true ? navigate("/sigin") : navigate("/signup");
    return () => {
      console.log("sigin");
    };
  }, [data]);
  return (
    <section className="bg-slate-600 h-1/2">
      <article>
        <div className="flex items-center justify-center min-h-screen bg-gray-100  ">
          <div className="mx-4 mt-4 text-left bg-white shadow-lg shadow-gray-400  md:w-1/4 lg:w-1/3 sm:w-1/3 p-[50px]">
            <h3 className="text-4xl font-bold text-center text-orange-500">
              Register to First Buy
            </h3>
            <form action>
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="Name">
                    Name
                    <label>
                      <input
                        type="text"
                        placeholder="Name"
                        {...setUserName}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block" htmlFor="email">
                    Email
                    <label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        {...setEmail}
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Password
                    <label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        {...setPassword}
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    Phone Number
                    <label>
                      <input
                        type="tel"
                        placeholder="phone number"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </label>
                  </label>
                </div>

                <div className="flex">
                  <button
                    className="w-full px-6 py-2 mt-4 border border-orange-500 text-orange-500 rounded-3xl hover:bg-orange-500 hover:text-white"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </button>
                </div>
                <div className="mt-6 text-grey-dark">
                  Already have an account?
                  <a className="text-blue-600 hover:underline" href="#">
                    Log in
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <form>
          <div>
            <label>FirstName</label>
            <input type="text" name="firstName" {...setFirstName} />
          </div>
          <div>
            <label>LastName</label>
            <input type="text" name="lastName" {...setLastName} />
          </div>
          <button onClick={handleSubmit}>submit</button>
        </form> */}
      </article>
    </section>
  );
};

export default SiginForm;
<div className="flex justify-center items-center mt-32 ">
  <div className="w-full max-w-xs">
    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          className="shadow appearance border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="border-b-2 px-3">
        <h1 className="flex justify-center items-center">or</h1>
      </div>
      <h6 className="text-gray-400 text-[10px] ml-[90px]">New to First buy</h6>
      <a href="/signup">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 ml-3 rounded focus:outline-none focus:shadow-outline mt-2"
          type="button"
        >
          Create a New Account
        </button>
      </a>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2020 First buy. All rights reserved.
    </p>
  </div>
</div>;
