import { UPDATE_POSTS } from '../actions';


export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}