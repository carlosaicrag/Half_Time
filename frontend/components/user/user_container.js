import { connect } from 'react-redux'

import User from "./user"

const mapStateToProps = (state) => {

    return({
        currentUser: state.session.currentUser,
        stories: state.ent
    })
}

export default connect(mapStateToProps)(User)