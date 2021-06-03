import React from "react";
import { Share, Post } from "..";
import "./feed.css";

function Feed(props) {
  return (
    <div className="post-list-container feed">
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
