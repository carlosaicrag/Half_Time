import * as commentUtil from "../utils/comments_util"

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComment = (comment) => {
    return({
        type:RECEIVE_COMMENT,
        comment: comment
    })
}

const removeComment = (comment) => {
    return({
        type:REMOVE_COMMENT,
        commentId: comment.Id
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