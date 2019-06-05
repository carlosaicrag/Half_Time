import { combineReducers } from 'redux'
import UserReducer from './user_reducer'
import StoryReducer from './stories_reducer'
import LikesReducer from './likes_reducer'
import FollowsReducer from './follows_reducer'
import CommentReducer from './comments_reducer'

export default combineReducers({
        users: UserReducer,
        stories: StoryReducer,
        likes: LikesReducer,
        follows: FollowsReducer,
        comments: CommentReducer
})