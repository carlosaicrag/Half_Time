import { connect } from "react-redux"
import StoryShow from "./story_show"
import { fetchStory } from "../../actions/stories_actions";
import {createLike, deleteLike} from "../../actions/likes_actions";

const mapStateToBanana = (state,ownProps) => {
    let story = state.entities.stories[ownProps.match.params.storyId]
    let likes = Object.values(state.entities.likes)
    return({
        story:story,
        likes:likes,
        currentUser: state.session.currentUser      
    })
}

const mapDispatchToBanana = (dispatch) => {
    return({
        fetchStory: (id) => dispatch(fetchStory(id)),
        createLike: (storyId) => dispatch(createLike(storyId)),
        removeLike: (storyId) => dispatch(deleteLike(storyId))
    })
}

export default connect(mapStateToBanana,mapDispatchToBanana)(StoryShow)