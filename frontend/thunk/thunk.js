const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        debugger
        return action(dispatch, getState)
    }
    return next(action)
}

export default thunk;