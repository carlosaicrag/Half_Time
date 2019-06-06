import React from "react"
import { timingSafeEqual } from "crypto";
import CommentShow from "../comments/comment_show"
import CommentCreate from "../comments/comment_create"


class StoryShow extends React.Component {
    constructor(props){
        super(props)

        this.handleLike = this.handleLike.bind(this)
        this.liked = this.liked.bind(this)
        this.followed = this.followed.bind(this)
        this.handleFollow = this.handleFollow.bind(this)
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

    handleFollow(){
        let followeeId = this.props.story.authorId
        if(this.followed()){
            this.props.deleteFollow(followeeId)
        }else{  
            this.props.createFollow(followeeId)
        }
    }

    followed(){
        for(let i = 0; i < this.props.follows.length; i++){
            if(this.props.follows[i].follower_id === parseInt(this.props.currentUser)){
                return true
            }
        }

        return false 
    }

    liked(){
        
        for(let i = 0; i < this.props.likes.length; i++){
            if(this.props.likes[i].user_id === parseInt(this.props.currentUser)){
                return true
            }
        }
        return false

    }

    render(){
        if(!this.props.story) return null;

        let comments = this.props.comments.map((comment) => {
            return(
                <CommentShow
                    comment={comment}
                />
            )
        })

        let likeDescription; 
        let followDescription;

        if(this.liked()){
            likeDescription = "Unlike"
        }else{
            likeDescription = "like"
        }

        if(this.followed()){
            followDescription = "Unfollow"
        }else{
            followDescription = "Follow"
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
                            <div onClick={this.handleFollow} className="follow-button"><div>{followDescription}</div></div>
                        </div>
                        <div className="story-show-details-date-star">
                            <div className="date">Date</div>
                        </div>
                    </div>
                </div>

                <img className="story-show-image" src={this.props.story.photoUrl} alt={this.props.story.title} />
                <div className="story-show-details-body">{this.props.story.body}</div>
                
                <CommentCreate 
                    storyId = {this.props.story.id}
                    currentUserId = {this.props.currentUser}
                    action = {this.props.createComment}
                    props = {this.props}
                />

                <div>
                    {comments}
                </div>

            </div>
        )
    }
}

export default StoryShow;