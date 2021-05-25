import React from "react";
import "./share.css";
import {Label, EmojiEmotionsOutlined, PermMediaOutlined} from '@material-ui/icons';

function Share(props) {
  return (
    <div className="share">
      <div className="share-container">
        <div className="share-top">
          <img className="share-profile-img" src="" alt="" />
          <input
            type="text"
            name="content"
            className="share-input"
            placeholder="What's on your mind, Aman?"
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
              <EmojiEmotionsOutlined htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feelings/Activity</span>
            </div>
          </div>
          <button className="share-btn">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
