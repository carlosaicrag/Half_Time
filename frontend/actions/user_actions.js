import * as UserUtils from "../utils/users_util"
import { receiveCurrentUser } from "./session_actions";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER"
export const RECEIVE_USER_W_STORIES = "RECEIVE_USER_W_STORIES"

export const receiveUser = (payload) => {
    return({
        type: RECEIVE_USER,
        user: payload.user,
        stories: payload.stories
    })
}

// export const removeUser = (payload) => {
//     return({
//         type:REMOVE_USER,
//         user: payload.user,
//         stories: payload.stories,
//     })
// }

export const fetchUser = (id) => (dispatch) => {
    return(
        UserUtils.fetchUser(id).then(payload => dispatch(receiveUser(payload)))
    )
}

// export const deleteUser = (id) => (dispatch) => {
//     return(
//         UserUtils.deleteUser(id).then(user => dispatch())
//     )
// }