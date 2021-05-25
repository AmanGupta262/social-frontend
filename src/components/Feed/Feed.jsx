import React from "react";
import { Share } from "..";
import "./feed.css";

function Feed(props) {
  const { posts } = props;
  return (
    <div className="post-list-container feed">
      <Share />
      {posts.map((post) => {
        return (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <a href="/">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-pic"
                  />
                </a>
                <div>
                  <span className="post-author">{post.user}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
