import { assets } from "../../assets/assets";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img style={{width:'70%',height:'70%'}} src={assets.logo} alt="" />
          <p>Hungry Hive: Satisfying your cravings with a delightful array of dishes, delivered right to your doorstep!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-1234567890</li>
                <li>contact@hungryhive.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Hungry Hive Pvt. Ltd
      </p>
    </div>
  );
};
