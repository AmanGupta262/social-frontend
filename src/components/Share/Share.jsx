import React, { useState } from "react";
import {Label, EmojiEmotionsOutlined, PermMediaOutlined} from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { createPost } from '../../actions/posts'
import "./share.css";

function Share(props) {
  const {name} = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createPost(content));
    e.target.reset();
  };

  return (
    <div className="share">
      <div className="share-container">
        <form method="post" onSubmit={handleClick}>
          <div className="share-top">
            <img className="share-profile-img" src="" alt="" />
            <textarea
              name="content"
              className="share-input"
              placeholder={`What's on your mind, ${name}?`}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="share-bottom">
            <div className="share-options">
              <div className="share-option">
                <PermMediaOutlined htmlColor="#45bd62" className="share-icon" />
                <span className="share-option-text">Photo/Video</span>
              </div>
              <div className="share-option">
                <Label htmlColor="blue" className="share-icon" />
                <span className="share-option-text">Tag</span>
              </div>
              <div className="share-option">
                <EmojiEmotionsOutlined
                  htmlColor="goldenrod"
                  className="share-icon"
                />
                <span className="share-option-text">Feelings/Activity</span>
              </div>
            </div>
            <button type="submit" className="share-btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
