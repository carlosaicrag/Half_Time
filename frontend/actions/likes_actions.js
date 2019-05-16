import * as LikesUtil from "../utils/likes_util"

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

const receiveLike = (like) => {
    return({
        type: RECEIVE_LIKE,
        likeId: like.id,
        userId: like.user_id,
        storyId: like.story_id
    })
}

const removeLike = (like) => {
    return({
        type:REMOVE_LIKE,
        likeId: like.id
    })
}

export const createLike = like => dispatch => {

    return(
        LikesUtil.createLike(like).then(like => dispatch(receiveLike(like)))
    )
}

export const deleteLike = storyId => dispatch => {
    return(
        LikesUtil.removeLike(storyId).then(like => dispatch(removeLike(like)))
    )
}