import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    REMOVE_ERRORS
} from "../actions/session_actions"

const SessionErrorsReducer = (oldState=[],action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case REMOVE_ERRORS:
            return [];
        default:
            return oldState;
    }
}
export default SessionErrorsReducer;