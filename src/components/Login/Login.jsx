import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { clearAuthState, login } from "../../actions/auth";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, inProgress, isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      dispatch(clearAuthState());
    };
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/" />;
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
  };
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
            <form className="login-box">
              {error && <div className="login-error">{error}</div>}
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
                <button className="login-btn btn" disabled={inProgress}>
                  Logging in...
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="login-btn btn"
                >
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
