import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { clearAuthState, login } from "../../actions/auth";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, inProgress, isLoggedIn, success } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const { from } = location.state || { from: "/" };

  useEffect(() => {
    return () => {
      dispatch(clearAuthState());
    };
  }, [dispatch]);
  if (isLoggedIn) {
    console.log("redirected");

    return <Redirect to={from} />;
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    e.target.reset();
  };
  // const handleGoogleLogin = (e)
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
            <form className="login-box" onSubmit={handleSubmit}>
              {error && <div className="login-error">{error}</div>}
              {success && <div className="login-success">{success}</div>}
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
                onChange={handlePassword}
              />
              {inProgress ? (
                <button className="login-btn btn" disabled={inProgress}>
                  Logging in...
                </button>
              ) : (
                <button type="submit" className="login-btn btn">
                  Login
                </button>
              )}
              <div className="forgot-password">Forgot Password?</div>
              <div className="create-new-acc">
                <Link to="/register">Create New Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
