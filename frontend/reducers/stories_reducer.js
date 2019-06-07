import {
    RECEIVE_STORY,
    RECEIVE_STORIES,
    REMOVE_STORY
} from "../actions/stories_actions"

import {
    RECEIVE_USER
} from "../actions/user_actions"

import {
    RECEIVE_COMMENT
} from "../actions/comments_actions"

const StoryReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories
        case RECEIVE_STORY:
            newState = Object.assign({},oldState,{[action.story.id]:{id: action.story.id, body:action.story.body,title:action.story.title,photoUrl:action.story.photoUrl,authorId: action.story.author_id}})
            return newState;
        case REMOVE_STORY:
            newState = Object.assign({},oldState)
            delete newState[action.storyId]
            return newState;
        case RECEIVE_USER:
            return action.stories
        case RECEIVE_COMMENT:
            debugger
            newState = Object.assign({}, oldState, { [action.story.id]: { id: action.story.id, body: action.story.body, title: action.story.title, photoUrl: action.story.photoUrl, authorId: action.story.author_id } })
            return newState
        default:
            return oldState;
    }
}

export default StoryReducer;