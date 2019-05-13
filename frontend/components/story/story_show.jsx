import React from "react"


class StoryShow extends React.Component {
    constructor(props){
        super(props)

        this.handleLike = this.handleLike.bind(this)
    }

    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId);
    }

    handleLike(){
        // let currentUser = this.props.story.authorId;
        let storyId = this.props.story.id
        this.props.createLike(storyId)
    }

    render(){
        if(!this.props.story) return null
        return(
            <div className="story-show">
                <div onClick={this.handleLike}>Like</div>

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
            </div>
        )
    }
}

export default StoryShow;