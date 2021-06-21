import {
  CLEAR_POST_STATE,
  CREATE_POST,
  FETCH_POST_FAILED,
  LIKE_POST,
  FETCH_ALL_POSTS,
} from "../actions";

const initialPostState = {
  allPosts: [],
  isLoading: true,
  error: "",
};

export default function posts(state = initialPostState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isLoading: false,
        allPosts: action.posts,
      };
    case CREATE_POST:
      return {
        ...state,
        allPosts: [action.post, ...state.allPosts],
      };
    case FETCH_POST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case CLEAR_POST_STATE:
      return {
        ...state,
        error: "",
      };
    case LIKE_POST:
      const allPosts = [...state.allPosts];
      const postIndex = allPosts.findIndex(post => post._id === action.postId);
      const post = allPosts[postIndex];
      const likes = state.allPosts[postIndex].likes;
      const index = likes.findIndex(like => like._id === action.userId)
      !action.liked ? likes.push({_id: action.userId}) : likes.splice(index, 1);
      post.likes = likes;
      allPosts.splice(postIndex, 1, post);
      return {
        ...state,
        allPosts: [...allPosts ]
      };
    default:
      return state;
  }
}
