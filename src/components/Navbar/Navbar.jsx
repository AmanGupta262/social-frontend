import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import "./navbar.css";

function Navbar(props) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="logo">social</Link>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search for posts, articles or friends"
            className="search-input"
          />
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <Link to="/" className="link">
            Home
          </Link>
          {!auth.isLoggedIn && (
            <Link to="/register" className="link">
              Register
            </Link>
          )}
          {!auth.isLoggedIn && (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          {auth.isLoggedIn && (
            <button onClick={logOut} className="link btn">
              Logout
            </button>
          )}
        </div>
        {auth.isLoggedIn && (
          <div className="navbar-icons">
            <div className="navbar-icon">
              <Person />
              <span className="badge">1</span>
            </div>
            <div className="navbar-icon">
              <Chat />
              <span className="badge">1</span>
            </div>
            <div className="navbar-icon">
              <Notifications />
              <span className="badge">1</span>
            </div>
          </div>
        )}
        {auth.isLoggedIn && (
          <Link to="/profile">
            <img
              src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="profile-img"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
