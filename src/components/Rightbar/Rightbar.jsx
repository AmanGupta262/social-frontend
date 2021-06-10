import React from 'react';
import {} from "@material-ui/icons";
import './rightbar.css';

function Rightbar({profile}) {
  console.log(profile)
  return (
    <aside className="rightbar">
      <div className="rightbar-container">
        <div className="friend-container">
          <h4 className="title">Friends</h4>
          <div className="friends">
            <div className="friend">
              <div className="left">
                <img src="" alt="" className="profile-img" />
                <div className="name">Bob</div>
              </div>
              <div className="remove-friend btn">Remove</div>
            </div>
            <div className="friend">
              <div className="left">
                <img src="" alt="" className="profile-img" />
                <div className="name">Bob</div>
              </div>
              <div className="remove-friend btn">Remove</div>
            </div>
            <div className="friend">
              <div className="left">
                <img src="" alt="" className="profile-img" />
                <div className="name">Bob</div>
              </div>
              <div className="remove-friend btn">Remove</div>
            </div>
            <div className="friend">
              <div className="left">
                <img src="" alt="" className="profile-img" />
                <div className="name">Bob</div>
              </div>
              <div className="remove-friend btn">Remove</div>
            </div>
          </div>
        </div>
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