import React from "react";
import { Share, Post } from "..";
import "./feed.css";

function Feed(props) {
  const { posts } = props;
  return (
    <div className="post-list-container feed">
      <Share />
      {posts.map(post => <Post post={post} />)}
    </div>
  );
}

export default Feed;
