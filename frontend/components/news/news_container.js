import { connect } from "react-redux"
import { fetchStories } from "../../actions/stories_actions"
import { fetchApiStories } from "../../actions/stories_actions"
import News from "./news_component"
import {openModal} from "../../actions/modal_actions"

const mapStateToBanana = state => {
    return ({
        stories: Object.values(state.entities.stories),
        users: Object.values(state.entities.users)
    })
}

const mapDispatchToBanana = dispatch => {
    return ({
        fetchApiStories: (url) => dispatch(fetchApiStories(url)),
        fetchStories: () => dispatch(fetchStories()),
        openModal:(modal,url) => dispatch(openModal(modal,url))
    })
}

export default connect(mapStateToBanana, mapDispatchToBanana)(News);