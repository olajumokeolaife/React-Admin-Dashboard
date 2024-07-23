import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import Ecommerce  from "../../pages/Ecommerce";

function LoginRegister() {
  const navigate = useNavigate();

  const navigateToEcommerce = () => {
    navigate("/Ecommerce");
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remeber-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button onClick={navigateToEcommerce} type="submit">
            Login
          </button>

          <div className="rester-link">
            <p>
              Don't have an account?<a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box login">
        <form action="">
          register
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remeber-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="rester-link">
            <p>
              Already have an account?<a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
