import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import "./login.css";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const {error, inProgress} = useSelector(state => state.auth)
  console.log(error)
  return (
    <div className="container">
      <div className="login">
        <div className="login-container">
          <div className="left">
            <h3 className="login-logo">Social</h3>
            <span className="login-desc">
              Social helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="right">
            {error && {error}}
            <form className="login-box">
              {error}
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
              {inProgress ? (
                <button
                  onClick={handleSubmit}
                  className="login-btn btn"
                  disabled={inProgress}
                >
                  Logging in...
                </button>
              ) : (
                <button onClick={handleSubmit} className="login-btn btn">
                  Login
                </button>
              )}

              <div className="forgot-password">Forgot Password?</div>
              <div className="create-new-acc">Create New Account</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
