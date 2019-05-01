import { connect } from "react-redux";
import { logIn } from "../../actions/session"
import { closeModal } from '../../actions/modal_actions';
import Signup from "./signup"

const mapStateToProps = state => {
    return ({
        formType: "Welcome back."
    })
}

const mapDispatchToProps = dispatch => ({
    action: formUser => dispatch(logIn(formUser)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);