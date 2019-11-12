import React from "react"
import { timingSafeEqual } from "crypto";
import CommentShow from "../comments/comment_show"
import CommentCreate from "../comments/comment_create"
import { Link } from "react-router-dom"
import { HeartSpinner } from "react-spinners-kit";


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
            let commentAuthor = this.props.commentAuthors[comment.user_id]
            return(
                <CommentShow
                    comment={comment}
                    deleteComment = {this.props.deleteComment}
                    commentAuthor = {commentAuthor}
                    currentUserId = {this.props.currentUser}
                />
            )
        })

        let likeDescription; 
        let followDescription;

        if(this.liked()){
            likeDescription = "Unlike"
        }else{
            likeDescription = "Like"
        }

        if(this.followed()){
            followDescription = "Unfollow"
        }else{
            followDescription = "Follow"
        }

        let body_paragraphs = this.props.story.body.split("\n\n").map((el) =>{
            return(
                <div className="body-paragraphs">
                    <p>{el}</p> 
                </div>
            )
        })

        return(
            <div className="story-show">
                {/* <div onClick={this.handleLike} className="liked-container">
                    <div className="liked">
                        {likeDescription}
                    </div>
                </div> */}

                

                <div className="story-show-details-container">
                    <div className="story-show-details-title-container">
                        <div className="story-show-details-title">{this.props.story.title}</div>
                    </div>
                    <div className="story-show-details-author-follow-like-container">
                        <div className="story-show-author">
                            <Link to={`/users/${this.props.author.id}`}>
                                <img className="story-show-profile-pic" src={`https://www.gravatar.com/avatar/${this.props.author.email}`}/>
                            </Link> 

                            <div className="story-show-author-details">
                                {/* <div className="story-show-details-name-follow"> */}
                                    <Link to={`/users/${this.props.author.id}`} className="story-show-user-name-link">
                                        <div className="story-show-name">{this.props.author.username}</div>
                                    </Link>
                                    <div onClick={this.handleFollow} className="follow-button"><div>{followDescription}</div></div>
                                {/* </div> */}
                            </div>
                        </div>

                        <div className="liked-container">
                            <div onClick={this.handleLike} className="liked-description-container">
                                <div className="liked">
                                    {likeDescription}
                                </div>
                            </div>
                            <div className="num-likes">+ {this.props.likes.length}</div>
                        </div>
                    </div>
                </div>

                <img className="story-show-image" src={this.props.story.photoUrl} alt={this.props.story.title} />
                <div className="story-show-details-body">{body_paragraphs}</div>
                
                <div className="comments-conner">
                    <CommentCreate 
                        storyId = {this.props.story.id}
                        currentUserId = {this.props.currentUser}
                        action = {this.props.createComment}
                        props = {this.props}
                    />

                    <div className="comments">
                        {comments}
                    </div>

                </div>
            </div>
        )
    }
}

export default StoryShow;