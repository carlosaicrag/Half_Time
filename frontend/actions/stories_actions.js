import * as StoriesUtil from "../utils/stories_util"

export const RECEIVE_STORY = "RECEIVE_STORY"
export const RECEIVE_STORIES = "RECEIVE_STORIES"

const receiveStory = (payload) => {
    return({
        story: payload.story
    })
}

export const fetchStory = (id) => (dispatch) => {
    return(
        StoriesUtil.fetchStory(id).then(story => dispatch(receiveStory(story)))
    )
}

export const fetchStories = () => (dispatch) => {
    return(
        StoriesUtil.fetchStories().then(stories => dispatch(receiveStory(stories)))
    )
}