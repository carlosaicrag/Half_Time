import{
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/likes_actions"

import{
    RECEIVE_STORY
} from "../actions/stories_actions"

const likesReducer = (oldState={},action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_LIKE:
            newState = Object.assign({},oldState,{[action.likeId]:{user_id:action.userId,story_id:action.storyId}})
            return newState;
        case RECEIVE_STORY:
            return action.likes
        case REMOVE_LIKE:
            newState = Object.assign({}, oldState);
            delete newState[action.likeId]
            return newState
        default:
            return oldState;
    }
}

export default likesReducer;
