import {
    RECEIVE_USER_W_STORIES,
    RECEIVE_STORIES
} from "../actions/user_actions"

const UserReducer = (oldState={},action) => {
    Object.freeze(oldState);
    let newState; 
    switch (action.type){
        case RECEIVE_USER_W_STORIES:
            newState = Object.assign({},oldState, {[action.user.id]:{id:action.user.id,email:action.user.email}})
            return newState
        case RECEIVE_STORIES:
            return action.users;
        default: 
            return oldState;
    }
}

export default UserReducer;