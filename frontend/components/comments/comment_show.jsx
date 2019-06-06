import React from "react"

const CommentShow = (props) => {
    let comment = props.comment

    return(
        <div className="comment-show-container">
            <div>{comment.body}</div>
        </div>
    )
}
export default CommentShow 