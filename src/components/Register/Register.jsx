import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/auth";
import "./register.css";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, confirmPassword, name));
  };
  const { error, inProgress } = useSelector((state) => state.auth);
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
          <form method="post" onSubmit={handleSubmit} className="register-box">
            {error && <div className="register-error">{error}</div>}
            <input
              type="text"
              placeholder="Name"
              className="register-input"
              required
              onChange={handleName}
            />
            <input
              type="email"
              placeholder="Email address"
              className="register-input"
              required
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="register-input"
              required
              onChange={handlePassword}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="register-input"
              required
              onChange={handleConfirmPassword}
            />
            {inProgress ? (
              <button className="register-btn btn" disabled={inProgress}>
                Signning Up...
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="register-btn btn"
              >
                Sign Up
              </button>
            )}
            <div className="create-new-acc">Login</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;