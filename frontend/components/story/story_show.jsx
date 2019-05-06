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
            <div className="story-show">
                <div className="story-show-details-title">{this.props.story.title}</div>
                <div className="story-show-author">profile picture</div>
                <div className="story-show-image">image</div>
                <div className="story-show-details-body">{this.props.story.body}</div>
                <div className="comments">comments</div>
            </div>
        )
    }
}

export default StoryShow;