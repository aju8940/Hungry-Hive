import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="logo"
          style={{ width: "150px", marginTop: "20px" }}
        />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <Link
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
            to="/"
          >
            Home
          </Link>
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};
