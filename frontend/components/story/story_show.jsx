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

                <div className="story-show-author">
                    <div className="story-show-profile-pic"></div>

                    <div className="story-show-author-details">
                        <div className="story-show-details-name-follow">
                            <div className="story-show-name">Name</div>
                            <a src="#" className="follow-button"> <div>Follow</div> </a>
                        </div>
                        <div className="story-show-details-date-star">
                            <div className="date">Date</div>
                        </div>
                    </div>
                </div>

                <img className="story-show-image" src={this.props.story.photoUrl} alt={this.props.story.title} />
                <div className="story-show-details-body">{this.props.story.body}</div>
                <div className="comments">comments</div>
            </div>
        )
    }
}

export default StoryShow;