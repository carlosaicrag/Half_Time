import * as FollowsUtils from "../utils/follows_util"

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"

const receiveFollow = (follow) => {
    return ({   
        type: RECEIVE_FOLLOW,
        follow: follow
    })
}

const removeFollow = (follow) => {
    return ({   
        type: REMOVE_FOLLOW,
        follow: follow
    })
}



export const createFollow = followId => dispatch => {
    return(
        FollowsUtils.createFollow(followId).then(follow => dispatch(receiveFollow(follow)))
    )
}

export const deleteFollow = followId => dispatch => {
    return(
        FollowsUtils.removeFollow(followId).then(follow => dispatch(removeFollow(follow)))
    )
}