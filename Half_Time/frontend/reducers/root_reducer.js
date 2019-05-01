import { combineReducers } from 'redux'
import sessionReducer from './session'
import UiReducer from './ui_reducer'

export default combineReducers({
    // entities: entitiesReducer,
    session: sessionReducer,
    ui: UiReducer
})