import { connect } from "react-redux"
import StoryCreate from "./story_create"
import { createStory } from "../../actions/stories_actions"


const mapStateToBanana = (state) => {
    let currentUserId = parseInt(state.session.currentUser.id);

    return({
        story: {title:"", body:"",author_id:currentUserId}
    })
}

const mapDispatchToBanana = (dispatch) => {
    return({
        createStory: (story) => dispatch(createStory(story))
    })
}

export default connect(mapStateToBanana,mapDispatchToBanana)(StoryCreate)