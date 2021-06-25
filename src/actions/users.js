import { FETCH_ALL_USERS, FETCH_FRIENDS_OF_USER } from "./";

export function fetchUsers(users){
    return {
        type: FETCH_ALL_USERS,
        users
    }
}

export function fetchFriends(friends){
    return{
        type: FETCH_FRIENDS_OF_USER,
        friends
    }
}