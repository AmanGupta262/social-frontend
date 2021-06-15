import { CLEAR_POST_STATE, CREATE_POST, FETCH_POST_FAILED, LIKE_POST, UPDATE_POSTS } from "../actions";

const initialPostState = {
    allPosts: [],
    isLoading: true,
    error: ""
}

export default function posts(state = initialPostState, action) {
    switch(action.type){
        case UPDATE_POSTS:
            return {
                ...state,
                isLoading: false,
                allPosts: action.posts
            }
        case CREATE_POST:
            return {
                ...state,
                allPosts: [action.post, ...state.allPosts],
            }
        case FETCH_POST_FAILED:
            return {
                ...state,
                error: action.error,
            }
        case CLEAR_POST_STATE:
            return{
                ...state,
                error: ""
            }
        case LIKE_POST:
            return {
                ...state,
            }
        default:
            return state;
    }
}