import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
