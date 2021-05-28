import React from 'react';
import './login.css';

function Login(props) {
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
            <div className="login-box">
              <input
                type="email"
                placeholder="Email address"
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
              <div className="login-btn">Login</div>
              <div className="forgot-password">Forgot Password?</div>
              <div className="create-new-acc">Create New Account</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;