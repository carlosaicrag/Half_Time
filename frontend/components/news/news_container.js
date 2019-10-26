import { connect } from "react-redux"
import { fetchStories } from "../../actions/stories_actions"
import { fetchApiStories } from "../../actions/stories_actions"
import News from "./news_component"


const mapStateToBanana = state => {
    return ({
        stories: Object.values(state.entities.stories),
        users: Object.values(state.entities.users)
    })
}

const mapDispatchToBanana = dispatch => {
    return ({
        fetchApiStories: (url) => dispatch(fetchApiStories(url)),
        fetchStories: () => dispatch(fetchStories())
    })
}

export default connect(mapStateToBanana, mapDispatchToBanana)(News);