import { connect } from "react-redux"
import StoryShow from "./story_show"
import { fetchStory } from "../../actions/stories_actions";
import {createLike} from "../../actions/likes_actions";

const mapStateToBanana = (state,ownProps) => {
    let story = state.entities.stories[ownProps.match.params.storyId]
    return({
        story:story       
    })
}

const mapDispatchToBanana = (dispatch) => {
    return({
        fetchStory: (id) => dispatch(fetchStory(id)),
        createLike: (storyId) => dispatch(createLike(storyId))
    })
}

export default connect(mapStateToBanana,mapDispatchToBanana)(StoryShow)