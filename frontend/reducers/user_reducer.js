import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER, 
    RECEIVE_SESSION_ERRORS
} from "../actions/session_actions"
debugger
const UserReducer = (oldState={},action) => {
    debugger
    Object.freeze(oldState);
    let newState; 
    switch (action.type){
        case RECEIVE_CURRENT_USER:
        debugger
            newState = Object.assign({},oldState, {[action.user.id]:{id:action.user.id,email:action.user.email}})
            return newState
        default: 
            return oldState;
    }
}

export default UserReducer;