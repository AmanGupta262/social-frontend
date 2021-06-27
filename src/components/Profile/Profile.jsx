import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Sidebar, Feed, Rightbar } from "../";
import { profile } from '../../actions/users';

import "./profile.css";

function Profile(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const { user, friends, posts, articles, owner, requests } = useSelector(
    (state) => state.users.profile
  );
  const { inProgress } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(profile(id))
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="profile-right">
          {inProgress ? (
            <h4 className="loading">Loading...</h4>
          ) : (
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
          )}
          <div className="profile-right-bottom">
            {inProgress ? "" : <Feed />}
            {inProgress ? "" : <Rightbar profile={true} /> }
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
