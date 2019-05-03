import {
    RECEIVE_STORY,
    RECEIVE_STORIES
} from "../actions/stories_actions"

const StoryReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories
        case RECEIVE_STORY:
            return action.story
        default:
            return oldState;
    }
}