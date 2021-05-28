import React from 'react';
import './register.css';

function Register(props) {
    return (
      <div className="register">
        <div className="register-container">
          <div className="left">
            <h3 className="register-logo">Social</h3>
            <span className="register-desc">
              Social helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="right">
            <div className="register-box">
              <input
                type="text"
                placeholder="Name"
                className="register-input"
              />
              <input
                type="email"
                placeholder="Email address"
                className="register-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="register-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="register-input"
              />
              <div className="register-btn">Register</div>
              <div className="create-new-acc">Login</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register;