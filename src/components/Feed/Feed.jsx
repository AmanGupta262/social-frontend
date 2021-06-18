import { useSelector } from "react-redux";
import { Share, Post } from "..";
import "./feed.css";

function Feed(props) {
  const {postId} = props;
  const {allPosts, isLoading, error} = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="post-list-container feed">
      <Share />
      {isLoading ? (
        <h4 className="loading">Loading...</h4>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        allPosts.map((post) => <Post post={post} postId={postId} isLoggedIn={isLoggedIn} key={post._id} />)
      )}
    </div>
  );
}

export default Feed;
