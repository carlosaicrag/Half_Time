import React from "react"

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

        let deleteDescription;
        
        if(this.props.comment.user_id === parseInt(this.props.currentUserId)){
            deleteDescription = "Delete"
        }else{
            deleteDescription = " "
        }

        return(
            <div className="comment-show-container">
                    <div className="comment-show-author-container">Author</div>
                    <div className="comment-show-body">{this.props.comment.body}</div>
                    <div className="comment-show-delete" onClick={this.handleDelete}>{deleteDescription}</div>
            </div>
        )
    }
}
export default CommentShow 