import { UPDATE_POSTS } from '../actions';

export function fetchPosts() {
    console.log("hi")
    return (dispatch) => {
        const url = 'http://localhost:8000/api/v1/posts';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(updatePosts(data.data.posts));
            })
            .catch(err => console.error(err));
    }
}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}