import React from "react"


class StoryShow extends React.Component {
    constructor(props){
        super(props)

        this.handleLike = this.handleLike.bind(this)
        this.liked = this.liked.bind(this)
    }

    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId);
    }

    handleLike(){
        // let currentUser = this.props.story.authorId;
        let storyId = this.props.story.id;

        if(this.liked()){
            this.props.removeLike(storyId)
        } else{
            this.props.createLike(storyId)
        }
    }

    liked(){
        for(let i = 0; i < this.props.likes.length; i++){
            if(this.props.likes[i].user_id === parseInt(this.props.currentUser.id)){
                return true
            }
        }
        return false

    }

    render(){
        if(!this.props.story) return null;
        let likeDescription; 

        if(this.liked()){
            likeDescription = "Unlike"
        }else{
            likeDescription = "like"
        }

        return(
            <div className="story-show">
                <div onClick={this.handleLike} className="liked-container">
                    <div className="liked">
                        {likeDescription}
                    </div>
                </div>

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