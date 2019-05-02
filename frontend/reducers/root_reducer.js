import { combineReducers } from 'redux'
import SessionReducer from './session_reducer'
import UiReducer from './ui_reducer'
import ErrorsReducer from './errors_reducer'
import EntitiesReducer from './entitities_reducer'

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    ui: UiReducer,
    errors: ErrorsReducer
})