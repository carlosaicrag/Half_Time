import { connect } from "react-redux";
import { createNewUser , removeErrors} from "../../actions/session_actions"
import { closeModal, openModal } from '../../actions/modal_actions';
import Signup from "./signup"

const mapStateToProps = state => {
    debugger
    return({
        formType: "Join HalfTime.",
        errors: state.errors.session
    })
}

const mapDispatchToProps = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);