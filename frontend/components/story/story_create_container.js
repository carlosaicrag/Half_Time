import { connect } from "react-redux"
import StoryForm from "./story_create"
import { createStory } from "../../actions/stories_actions"


const mapStateToBanana = (state) => {
    let currentUserId = parseInt(state.session.currentUser.id);

    return({
        story: {title:"", body:"",imageUrl: "", imageFile: null, author_id:currentUserId},
        formType: "Create"
    })
}

const mapDispatchToBanana = (dispatch) => {
    return({
        action: (story) => dispatch(createStory(story))
    })
}

export default connect(mapStateToBanana,mapDispatchToBanana)(StoryForm)