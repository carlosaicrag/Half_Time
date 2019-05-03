import { combineReducers } from 'redux'
import UserReducer from './user_reducer'
import StoryReducer from './stories_reducer'

export default combineReducers({
        users: UserReducer,
        stories: StoryReducer
})