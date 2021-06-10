import React from 'react';
import { Navbar, Sidebar, Feed, Rightbar } from '../'

import './profile.css';

function Profile(props) {
    return (
      <>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="profile-right">
            <div className="profile-right-Top">
              <div className="profile-cover">
                <img
                  className="profile-cover-img"
                  src="https://images.pexels.com/photos/6272232/pexels-photo-6272232.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                />
                <img
                  className="profile-user-img"
                  src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="profile-info">
                <h4 className="profile-info-name">Aman Gupta</h4>
                <span className="profile-info-desc">Hello my friends!</span>
              </div>
            </div>
            <div className="profile-right-bottom">
              <Feed />
              <Rightbar profile={true} />
            </div>
          </div>
        </div>
      </>
    );
}

export default Profile;