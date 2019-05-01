import { connect } from "react-redux";
import { logIn } from "../actions/session"
import Signup from "./signup"

const mapStateToProps = state => {
    return ({
        formType: "Log In!"
    })
}

const mapDispatchToProps = dispatch => ({
    action: formUser => dispatch(logIn(formUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);