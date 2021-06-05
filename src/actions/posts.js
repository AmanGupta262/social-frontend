import axios from 'axios';
import { UPDATE_POSTS } from '../actions';

export function fetchPosts(dispatch) {
    return (dispatch) => {
        const url = 'https://social-nodejs-api.herokuapp.com/api/v1/posts';
        axios.get(url)
            .then(res => {
                const data = res.data.data;
                dispatch(updatePosts(data.posts));
            });
    };

}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}