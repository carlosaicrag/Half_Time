import {
    RECEIVE_STORY
} from "../actions/stories_actions"

const StoryReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_STORY:
            return action.story
        default:
            return oldState;
    }
}