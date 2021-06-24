import {
  FETCH_SINGLE_START,
  FETCH_SINGLE_FAILED,
  FETCH_SINGLE_POST,
  ADD_COMMENT,
} from "../actions";

const postDetailInitialState = {
  post: {},
  isPostLoading: true,
  error: "",
};

export default function postDetail(state = postDetailInitialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_START:
      return {
        ...state,
        isPostLoading: true,
      };
    case FETCH_SINGLE_POST:
      return {
        ...state,
        post: action.post,
        isPostLoading: false,
      };
    case FETCH_SINGLE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case ADD_COMMENT:
      const post = {...state.post}
      post.comments.splice(0, 0, action.comment);
      return {
        ...state,
        post: {...post},
      };
    default:
      return {
        ...state,
      };
  }
}
