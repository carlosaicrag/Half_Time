import React from "react"

const CommentShow = (props) => {
    let comment = props.comment

    return(
        <div>
            <div>{comment.body}</div>
        </div>
    )
}
export default CommentShow 