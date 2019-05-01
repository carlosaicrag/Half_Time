import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import { openModal } from '../../actions/modal_actions';
import Header from './header';

const mapStateToProps = (state) => {
    return({
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)