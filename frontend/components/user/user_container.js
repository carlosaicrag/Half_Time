import { connect } from 'react-redux'

import User from "./user"

const mapStateToProps = (state) => {

    return({
        currentUser: state.session.currentUser
    })
}

export default connect(mapStateToProps)(User)