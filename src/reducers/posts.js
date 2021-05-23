import { UPDATE_POSTS } from "../actions";

export default function posts(state = [], action) {
    switch(action.type){
        case UPDATE_POSTS:
            return state;
        default:
            return state;
    }
}