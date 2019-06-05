export const createComment = (comment) => {
    return(
        $.ajax({
            method: "POST",
            url: `comments/${comment.id}`,
            data:`${comment}`
        })
    )
} 

export const removeComment = (commentId) => {
    return(
        $.ajax({
            method:"DELETE",
            url: `comments/${commentId}`,
            data: `${commentId}`
        })
    )
}

