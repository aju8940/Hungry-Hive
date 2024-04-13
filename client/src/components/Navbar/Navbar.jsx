import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'><img
        src={assets.logo}
        alt="logo"
        className="logo"
        style={{ width: "150px", marginTop: "20px" }}
      /></Link>
      <ul className="navbar-menu">
        <Link to='/'><li>Home</li></Link>
        <li>Menu</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </Link>
        </div>
        <Link to='/sign-in'><button>Sign In</button></Link>
      </div>
    </div>
  );
};
