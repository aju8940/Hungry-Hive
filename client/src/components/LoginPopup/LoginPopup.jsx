import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

export const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState === "Signup" ? "Sign Up" : "Login"}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Signup" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Signup" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions.</p>
        </div>
        {currState === "Signup" ? (
          <p>
            Already have an account? <span onClick={()=>setCurrState('Login')}>Click here</span>
          </p>
        ) : (
          <p>
            Create a new account? <span onClick={()=>setCurrState('Signup')}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};
