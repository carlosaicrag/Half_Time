import React from "react"


class StoryShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId);
    }

    render(){
        if(!this.props.story) return null

        return(
            <div>
                <p>{this.props.story.title}</p>
                <p>{this.props.story.body}</p>
            </div>
        )
    }
}

export default StoryShow;