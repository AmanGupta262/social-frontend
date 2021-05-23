import React, { Component } from "react";
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <span className="logo">social</span>
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
            <span className="link">Home</span>
            <span className="link">Timeline</span>
          </div>
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
          <img src="" alt="" className="profile-img" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
