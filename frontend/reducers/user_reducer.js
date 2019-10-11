import {
    RECEIVE_STORIES,
    RECEIVE_STORY
} from "../actions/stories_actions"

import {
    RECEIVE_COMMENTS
} from "../actions/comments_actions"

const UserReducer = (oldState={},action) => {
    Object.freeze(oldState);
    let newState; 
    switch (action.type){
        case RECEIVE_STORIES:
            // newState = Object.assign({},oldState,{action})
            return action.users;
        case RECEIVE_STORY:
            // newState = Object.assign({}, oldState, { [action.user.id]: {email:action.user.email,id:action.user.id} })
            newState = Object.assign({}, oldState,  action.story.users )
            return newState
        case RECEIVE_COMMENTS:
            newState = Object.assign({}, oldState, action.story.users)
            return newState
        default: 
            return oldState;
    }
}

export default UserReducer;