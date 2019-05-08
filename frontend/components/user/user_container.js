import { connect } from 'react-redux'

import User from "./user"
import {fetchUser} from "../../actions/user_actions"
import {deleteStory} from "../../actions/stories_actions"
import {withRouter} from "react-router-dom"

const mapStateToProps = (state) => {
    return({
        currentUser: state.session.currentUser,
        stories: Object.values(state.entities.stories)
    })
}

const mapDispatchtoBanana = (dispatch) => {
    return({
        fetchUser: (id) => dispatch(fetchUser(id)),
        deleteStory: (id) => dispatch(deleteStory(id))
    })
}

export default withRouter(connect(mapStateToProps,mapDispatchtoBanana)(User))