import {
    RECEIVE_STORIES,
    RECEIVE_STORY
} from "../actions/stories_actions"

const UserReducer = (oldState={},action) => {
    Object.freeze(oldState);
    let newState; 
    switch (action.type){
        case RECEIVE_STORIES:
            return action.users;
        case RECEIVE_STORY:
            newState = Object.assign({}, oldState, { [action.user.id]: {email:action.user.email,id:action.user.id} })
            return newState
        default: 
            return oldState;
    }
}

export default UserReducer;