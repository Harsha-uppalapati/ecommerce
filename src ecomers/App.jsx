import React from "react";
import Navbar from "./Component/Navbar";

import Home from "./Pages/Home";

import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";

import SingleProduct from "./Pages/SingleProduct";
import Checkout from "./Pages/Checkout";
import SignupForm from "./Component/SignupForm";
import SiginForm from "./Component/SiginForm";

const App = () => {
  return (
    <Routers>
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sigin" element={<SiginForm />} />
        </Routes>
      </div>
    </Routers>
  );
};

export default App;
