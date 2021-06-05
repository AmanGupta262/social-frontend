import axios from 'axios';
import { UPDATE_POSTS } from '../actions';
import { APIUrls } from '../helpers/urls';

export function fetchPosts(dispatch) {
    return (dispatch) => {
        const url = APIUrls.fetchPosts();
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