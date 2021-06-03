import React, { useRef } from "react";
import "./login.css";

function Login(props) {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
  };
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
          <form className="login-box" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              className="login-input"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              required
              minLength="6"
              ref={password}
            />
            <button type="submit" className="login-btn">Login</button>
            <div className="forgot-password">Forgot Password?</div>
            <div className="create-new-acc">Create New Account</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
