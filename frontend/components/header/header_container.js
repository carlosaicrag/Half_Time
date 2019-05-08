import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import {fetchUser} from "../../actions/user_actions"

import Header from './header';

const mapStateToProps = (state) => {
    return({
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)