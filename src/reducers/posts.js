import { CLEAR_POST_STATE, CREATE_POST, FETCH_POST_FAILED, LIKE_POST, FETCH_ALL_POSTS, FETCH_SINGLE_POST } from "../actions";

const initialPostState = {
    allPosts: [],
    post: {},
    isLoading: true,
    error: ""
}

export default function posts(state = initialPostState, action) {
    switch(action.type){
        case FETCH_ALL_POSTS:
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
        case FETCH_SINGLE_POST:
            return {
                ...state,
                post: action.post,
            }
        default:
            return state;
    }
}