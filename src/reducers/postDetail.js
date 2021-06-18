import {
  FETCH_SINGLE_START,
  FETCH_SINGLE_FAILED,
  FETCH_SINGLE_POST,
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
    default:
      return {
        ...state,
      };
  }
}
