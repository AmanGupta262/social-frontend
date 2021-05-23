import { UPDATE_POSTS } from '../actions';

export function fetchPosts() {
    console.log("hi")
    return (dispatch) => {
        const url = '';
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         dispatch(updatePosts(data.data.posts));
        //     })
        //     .catch(err => console.error(err));
    }
}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}