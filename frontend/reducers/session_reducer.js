import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions"

//if we don't have a current user, this is what we will be returning 
const _nullSession = {
    currentUser: null,
}

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //if this action is received then go aehad and return the current
            //user that was passed in as the payload
            return Object.assign({}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            //if this action is received then go ahead logout the current user 
            return _nullSession;
        default:
            return state;
    }
}