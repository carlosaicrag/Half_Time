import { combineReducers } from 'redux';

import sessionErrorsReducer from "./session_errors_reducers";

const errorsReduceer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReduceer;