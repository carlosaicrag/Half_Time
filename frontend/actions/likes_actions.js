import * as LikesUtil from "../utils/likes_util"

export const RECEIVE_LIKE = "RECEIVE_LIKE"

const receiveLike = (like) => {
    return({
        type: RECEIVE_LIKE,
        likeId: like.id,
        userId: like.user_id,
        storyId: like.story_id
    })
}

export const createLike = like => dispatch => {

    return(
        LikesUtil.createLike(like).then(like => dispatch(receiveLike(like)))
    )
}