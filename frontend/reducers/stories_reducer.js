import {
    RECEIVE_STORY,
    RECEIVE_STORIES
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
        default:
            return oldState;
    }
}

export default StoryReducer;