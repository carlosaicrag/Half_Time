import { connect } from "react-redux"
import { fetchStories } from "../../actions/stories_actions"
import HomeFeed from "./home_feed"


const mapStateToBanana = state => {
    return({
        stories: Object.values(state.entities.stories),
        users: Object.values(state.entities.users)        
    })
}

const mapDispatchToBanana = dispatch => {
    return({
        fetchStories: () => dispatch(fetchStories())
    })
}

export default connect(mapStateToBanana,mapDispatchToBanana)(HomeFeed);