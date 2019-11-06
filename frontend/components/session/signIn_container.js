import { connect } from "react-redux";
import { logIn, removeErrors } from "../../actions/session_actions"
import { closeModal, openModal } from '../../actions/modal_actions';
import Signup from "./signup"

const mapStateToProps = state => {
    return ({
        formType: "Welcome back.",
        errors: state.errors.session
    })
}

const mapDispatchToProps = dispatch => {
    return({
    action: formUser => dispatch(logIn(formUser)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    removeErrors: () => dispatch(removeErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);