import React from 'react';
import {} from "@material-ui/icons";
import './rightbar.css';
import { useSelector } from 'react-redux';

function Rightbar({profile}) {
  const {isLoggedIn, user} = useSelector(state => state.auth);
  return (
    <aside className="rightbar">
      <div className="rightbar-container">
        {isLoggedIn && (
          <div className="friend-container">
            <h4 className="title">Friends</h4>
            <div className="friends">
              {user.friends.length === 0 ? (
                <h5>No friends to view</h5>
              ) : (
                user.friends.map((friend) => (
                  <div className="friend">
                    <div className="left">
                      <img src="" alt="" className="profile-img" />
                      <div className="name">Bob</div>
                    </div>
                    <div className="remove-friend btn">Remove</div>
                  </div>
                ))
              )}             
            </div>
          </div>
        )}

        {!profile && (
          <div className="user-container">
            <h4 className="title">Users</h4>
            <div className="users">
              <div className="user">
                <div className="left">
                  <img src="" alt="" className="profile-img" />
                  <div className="name">Bob</div>
                </div>
                <div className="add-friend btn">Add Friend</div>
              </div>
              <div className="user">
                <div className="left">
                  <img src="" alt="" className="profile-img" />
                  <div className="name">Bob</div>
                </div>
                <div className="add-friend btn">Add Friend</div>
              </div>
              <div className="user">
                <div className="left">
                  <img src="" alt="" className="profile-img" />
                  <div className="name">Bob</div>
                </div>
                <div className="add-friend btn">Add Friend</div>
              </div>
              <div className="user">
                <div className="left">
                  <img src="" alt="" className="profile-img" />
                  <div className="name">Bob</div>
                </div>
                <div className="add-friend btn">Add Friend</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Rightbar;