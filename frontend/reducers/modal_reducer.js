import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

export default function modalReducer(state=null, action){
    let nextState = Object.assign({},state)
    switch (action.type) {
        case OPEN_MODAL:
            debugger
            nextState.modal = action.modal
            nextState.url = action.url
            return action;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}