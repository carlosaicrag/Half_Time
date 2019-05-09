import React from "react"
import { connect } from "react-redux"
import StoryForm from "./story_create"
import { updateStory,fetchStory } from "../../actions/stories_actions"


const mapStateToBanana = (state,ownProps) => {
    let storyId = ownProps.match.params.storyId
    let story = state.entities.stories[storyId]
    return ({
        story: story,
        formType: "Edit"
    })
}


const mapDispatchToBanana = (dispatch) => {
    return ({
        fetchStory: (id) => dispatch(fetchStory(id)),
        action: (formData,storyId) => dispatch(updateStory(formData,storyId))
    })
}

class EditStory extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let storyId = this.props.match.params.storyId
        this.props.fetchStory(storyId)
    }

    render(){

        return(
            <div>
                <StoryForm 
                    story={this.props.story}
                    formType={this.props.formType}
                    action={this.props.action}
                />
            </div>
        )
    }



}

export default connect(mapStateToBanana, mapDispatchToBanana)(EditStory)