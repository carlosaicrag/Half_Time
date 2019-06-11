import * as commentUtil from "../utils/comments_util"

export const RECEIVE_COMMENTS = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComment = (payload) => {
    return({
        type:RECEIVE_COMMENTS,
        comments: payload.story.comments,
        story: payload.story
    })
}

const removeComment = (payload) => {
    return({
        type: REMOVE_COMMENT,
        commentId: payload.id,
    })
}

export const createComment = (comment) => (dispatch) => {
    return(
        commentUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = (commentId) => (dispatch) => {
    return(
        commentUtil.removeComment(commentId).then((comment) => dispatch(removeComment(comment)))
    )
}