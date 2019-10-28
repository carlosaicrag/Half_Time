import React from "react"
import {Link} from "react-router-dom"

class CommentShow extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(){
        let commentId = this.props.comment.id
        this.props.deleteComment(commentId)
    }

    render(){

        if(this.props.commentAuthor === undefined){
            return null
        }

        let deleteDescription;
        if(this.props.comment.user_id === parseInt(this.props.currentUserId)){
            deleteDescription = "Delete"
        }else{
            deleteDescription = " "
        }
        return(
            <div className="comment-show-container">
                <Link className="comment-show-image" to={`/users/${this.props.commentAuthor.id}`}>
                    <img src={this.props.commentAuthor.photoUrl} alt=""/>
                    <div className="comment-show-author-container">{this.props.commentAuthor.username}</div>
                </Link>
                    <div className="comment-show-body">{this.props.comment.body}</div>
                    <div className="comment-show-delete" onClick={this.handleDelete}>{deleteDescription}</div>
            </div>
        )
    }
}
export default CommentShow 