import {
    RECEIVE_COMMENT, REMOVE_COMMENT
} from "../actions/comments_actions"

import {
    RECEIVE_STORY
} from "../actions/stories_actions"

const commentReducer = (oldState={},action) => {
    Object.freeze(oldState)
    let newState;

    switch (action.type) {
        case RECEIVE_COMMENT:
            return action.comment
        case REMOVE_COMMENT:
            newState = Object.assign({},oldState)
            delete newState[action.commentId]
            return newState
        case RECEIVE_STORY:
            newState = Object.assign({},oldState,{[action.comment.id]:
                {body:action.comment.body,
                user_id:action.comment.user_id,
                story_id:action.comment.story_id}})
            return newState
        default:
            return oldState
    }
}

export default commentReducer