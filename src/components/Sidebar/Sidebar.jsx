import React, { Component } from 'react';
import {Group, RssFeed, Flag, PersonAdd, PostAdd, Description } from '@material-ui/icons';
import './sidebar.css';

class Sidebar extends Component {
    render() {
        return (
          <aside className="sidebar">
            <div className="sidebar-container">
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <RssFeed className="sidebar-icon" />
                  <span className="list-text">Feed</span>
                </li>
                <li className="sidebar-list-item">
                  <PostAdd className="sidebar-icon" />
                  <span className="list-text">Posts</span>
                </li>
                <li className="sidebar-list-item">
                  <Description className="sidebar-icon" />
                  <span className="list-text">Articles</span>
                </li>
                <li className="sidebar-list-item">
                  <PersonAdd className="sidebar-icon" />
                  <span className="list-text">Find Friends</span>
                </li>
                <li className="sidebar-list-item">
                  <Group className="sidebar-icon" />
                  <span className="list-text">Users</span>
                </li>
                <li className="sidebar-list-item">
                  <Flag className="sidebar-icon" />
                  <span className="list-text">Pages</span>
                </li>
              </ul>
            </div>
          </aside>
        );
    }
}

export default Sidebar;