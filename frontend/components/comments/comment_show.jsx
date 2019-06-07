import React from "react"

const CommentShow = (props) => {
    let comment = props.comment

    return(
        <div className="comment-show-container">
                <div className="comment-show-author-container">Author</div>
                <div className="comment-show-body">{comment.body}</div>
        </div>
    )
}
export default CommentShow 