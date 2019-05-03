import { connect } from "react-redux";
import { createNewUser } from "../../actions/session_actions"
import { closeModal, openModal } from '../../actions/modal_actions';
import Signup from "./signup"

const mapStateToProps = state => {
    return({
        formType: "Join HalfTime.",
        errors: state.errors.session
    })
}

const mapDispatchToProps = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);