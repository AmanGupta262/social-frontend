import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Share, Post, PostDetail } from "..";
import { fetchPost } from "../../actions/postDetail";

import "./feed.css";

function Feed(props) {
  const { postId, posts } = props;
  const { allPosts, isLoading, error } = useSelector((state) => state.posts);
  const { isPostLoading, post } = useSelector((state) => state.postDetail);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postId) return;
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  if (postId) {
    return (
      <div className="post-list-container feed">
        {isPostLoading ? (
          <h4 className="loading">Loading...</h4>
        ) : (
          <PostDetail post={post} />
        )}
      </div>
    );
  } else {
    return (
      <div className="post-list-container feed">
        {isLoading ? (
          <h4 className="loading">Loading...</h4>
        ) : error ? (
          <h4>{error}</h4>
        ) : (
          <>
            <Share />
            {posts
              ? posts.map((post) => (
                  <Post post={post} isLoggedIn={isLoggedIn} key={post._id} />
                ))
              : allPosts.map((post) => (
                  <Post post={post} isLoggedIn={isLoggedIn} key={post._id} />
                ))}
          </>
        )}
      </div>
    );
  }
}

export default Feed;
