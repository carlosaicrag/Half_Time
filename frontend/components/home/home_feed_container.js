import { connect } from "react-redux"
import { fetchStories } from "../../actions/stories_actions"
import { fetchApiStories } from "../../actions/stories_actions"
import HomeFeed from "./home_feed"


const mapStateToBanana = state => {
    return({
        stories: Object.values(state.entities.stories),
        users: Object.values(state.entities.users)        
    })
}

const mapDispatchToBanana = dispatch => {
    return({
        fetchApiStories: (url) => dispatch(fetchApiStories(url)),
        fetchStories: () => dispatch(fetchStories())
    })
}

export default connect(mapStateToBanana,mapDispatchToBanana)(HomeFeed);