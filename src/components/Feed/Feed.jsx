import { useSelector } from "react-redux";
import { Share, Post } from "..";
import "./feed.css";

function Feed(props) {
  const {allPosts, isLoading, error} = useSelector((state) => state.posts);
  return (
    <div className="post-list-container feed">
      <Share />
      {isLoading ? (
        <h4 class="loading">Loading...</h4>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        allPosts.map((post) => <Post post={post} key={post._id} />)
      )}
    </div>
  );
}

export default Feed;
