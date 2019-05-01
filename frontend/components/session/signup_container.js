import { connect } from "react-redux";
import { createNewUser } from "../../actions/session"
import { closeModal } from '../../actions/modal_actions';
import Signup from "./signup"

const mapStateToProps = state => {
    return({
        formType: "Join Medium."
    })
}

const mapDispatchToProps = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);