import {
    RECEIVE_STORY,
    RECEIVE_STORIES,
    RECEIVE_USER_W_STORIES,
    REMOVE_STORY
} from "../actions/stories_actions"

const StoryReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories
        case RECEIVE_STORY:
            newState = Object.assign({},oldState,{[action.story.id]:action.story})
            return newState;
        case REMOVE_STORY:
            newState = Object.assign({},oldState)
            delete newState[action.storyId]
            return newState;
        case RECEIVE_USER_W_STORIES:
            return action.stories;
        default:
            return oldState;
    }
}

export default StoryReducer;