import * as StoriesUtil from "../utils/stories_util"

export const RECEIVE_STORY = "RECEIVE_STORY"
export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const RECEIVE_USER_W_STORIES = "RECEIVE_USER_W_STORIES"
export const REMOVE_STORY = "REMOVE_STORY"

const receiveStory = (payload) => {
    return({
        type: RECEIVE_STORY,
        story: payload
    })
}

const receiveStories = (payload) => {
    return ({
        type: RECEIVE_STORIES,
        stories: payload.stories
    })
}

const removeStory = (story) => {
    return({
        type: REMOVE_STORY,
        storyId: story.id
    })
}


export const fetchStory = (id) => (dispatch) => {
    return(
        StoriesUtil.fetchStory(id).then(story => dispatch(receiveStory(story)))
    )
}

export const fetchStories = () => (dispatch) => {
    return(
        StoriesUtil.fetchStories().then(stories => dispatch(receiveStories(stories)))
    )
}

export const createStory = (story) => (dispatch) => {
    return(
        StoriesUtil.createStory(story).then(story => dispatch(receiveStory(story)))
    )
}

export const deleteStory = (id) => (dispatch) => {
    return(
        StoriesUtil.deleteStory(id).then(story => dispatch(removeStory(story)))
    )
}

