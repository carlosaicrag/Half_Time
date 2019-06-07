import {
    RECEIVE_COMMENTS, REMOVE_COMMENT
} from "../actions/comments_actions"

import {
    RECEIVE_STORY
} from "../actions/stories_actions"

const commentReducer = (oldState={},action) => {
    Object.freeze(oldState)
    let newState;

    switch (action.type) {
        case RECEIVE_COMMENTS:
            debugger
            return action.comments
        case REMOVE_COMMENT:
            newState = Object.assign({},oldState)
            delete newState[action.commentId]
            return newState
        case RECEIVE_STORY:
            return action.comments
        default:
            return oldState
    }
}

export default commentReducer