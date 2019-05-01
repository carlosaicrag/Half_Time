import { connect } from "react-redux";
import { createNewUser } from "../actions/session"
import Signup from "./signup"

const mapStateToProps = state => {
    return({
        formType: "Sign Up"
    })
}

const mapDispatchToProps = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);