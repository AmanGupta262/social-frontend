import { useSelector } from "react-redux";
import { Share, Post } from "..";
import "./feed.css";

function Feed(props) {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="post-list-container feed">
      <Share />
      {posts.map(post => <Post post={post} key={post._id} />)}
    </div>
  );
}

export default Feed;
