import React, { useState } from "react";
import "./login.css";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail =(e) => {
    setEmail(e.target.value);
  }
  const handlePassword= (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="login">
      <div className="login-container">
        <div className="left">
          <h3 className="login-logo">Social</h3>
          <span className="login-desc">
            Social helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="right">
          <form className="login-box">
            <input
              type="email"
              placeholder="Email address"
              className="login-input"
              required
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              required
              minLength="6"
              onChange={handlePassword}
            />
            <div className="login-btn">Login</div>
            <div className="forgot-password">Forgot Password?</div>
            <div className="create-new-acc">Create New Account</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
