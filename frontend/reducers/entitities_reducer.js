import { combineReducers } from 'redux'
import UserReducer from './user_reducer'

export default combineReducers(
    {
        users: UserReducer
    }   
)