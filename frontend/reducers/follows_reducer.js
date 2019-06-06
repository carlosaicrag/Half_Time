import {
    RECEIVE_FOLLOW, 
    REMOVE_FOLLOW
} from "../actions/follows_actions"

import {
    RECEIVE_STORY
} from "../actions/stories_actions"
import { bindActionCreators } from "redux";

const followsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_FOLLOW:
            newState = Object.assign({},oldState,{[action.follow.id]: {follower_id:action.follow.follower_id, followee_id: action.follow.followee_id}})
            return newState
        case RECEIVE_STORY:
            return action.follows
        case REMOVE_FOLLOW:
            newState = Object.assign({},oldState)
            delete newState[action.follow.id]
            return newState
        default: 
            return oldState
    }   
}

export default followsReducer