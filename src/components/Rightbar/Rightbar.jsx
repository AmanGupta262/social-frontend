import React from "react";
import {} from "@material-ui/icons";
import "./rightbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Rightbar({ profile }) {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);
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
                user.friends.slice(0, 4).map((friend) => (
                  <div className="friend">
                    <div className="left">
                      <Link to={`/${user._id}/profile`}>
                        <img src="" alt="" className="profile-img" />
                      </Link>
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
              {allUsers.length === 0 ? (
                <h5>No Users to view</h5>
              ) : (
                allUsers.slice(0, 4).map(
                  (singleUser) =>
                    singleUser._id !== user._id && (
                      <div className="user" key={singleUser._id}>
                        <div className="left">
                          <Link to={`/${user._id}/profile`}>
                            <img src="" alt="" className="profile-img" />
                          </Link>
                          <div className="name">{singleUser.name}</div>
                        </div>
                        <div className="add-friend btn">Add Friend</div>
                      </div>
                    )
                )
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Rightbar;
